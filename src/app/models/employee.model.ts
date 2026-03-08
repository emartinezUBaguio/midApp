// data/mock-users.ts
// Provides an array of mock User objects that implement the User interface.
// In a real app, this data would come from an API/backend service.
export interface Post {
  id: number;
  title: string;
  body: string;
  date: string;
}

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  departmentId: number;
  position: string;
  role: string;
  posts: Post[];
}

