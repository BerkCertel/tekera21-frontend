import { getAdminProducts } from "@/services/superadmin/product";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: true,
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const data = await getAdminProducts();
      return data;
    } catch (error:any) {
      console.log("Fetch error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const adminProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Bir hata oluştu.";
      });
  },
});

export default adminProductSlice.reducer;
