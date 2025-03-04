import { create } from "zustand";

export const useBlogs = create((set) => ({
  blogs: [],
  setBlogs: (newBlogs) => set({ blogs: newBlogs }),
}));
