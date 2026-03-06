// models/user.interface.ts
// Defines the shape of a User object used throughout the application.
// The 'role' property is restricted to three specific string literals
// using a TypeScript union type — this prevents invalid role assignments.

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  department: string;
  position: string;
  role: 'admin' | 'user' | 'guest';  // Union type — only these three values allowed
}
