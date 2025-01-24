import {
  Category,
  Order,
  Product,
  User,
  AuthResponse,
  UserPreferences,
} from "./types";

const API_URL = "https://api.escuelajs.co/api/v1";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: Record<string, unknown>
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new ApiError(response.status, error.message || "API Error", error);
  }
  return response.json();
}

export async function handleApiError(error: unknown): Promise<never> {
  if (error instanceof Response) {
    const data = await error.json();
    throw new ApiError(error.status, data.message || "API Error", data);
  }
  if (error instanceof ApiError) {
    throw error;
  }
  throw new ApiError(500, "Unknown error occurred", { originalError: error });
}

export async function getStats() {
  try {
    const res = await fetch(`${API_URL}/stats`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      next: { revalidate: 300 },
    });
    return handleResponse<Record<string, unknown>>(res);
  } catch (error) {
    handleApiError(error);
  }
}

export async function updateProduct(id: number, data: Partial<Product>) {
  try {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    return handleResponse<Product>(res);
  } catch (error) {
    throw handleApiError(error);
  }
}
