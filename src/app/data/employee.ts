// data/mock-users.ts
// Provides an array of mock User objects that implement the User interface.
// In a real app, this data would come from an API/backend service.

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  department: string;
  position: string;
  role: string;
}

export const mockemployee: Employee[] = [
  {
    id: 1,
    firstname: 'Alice',
    lastname: 'Santos',
    email: 'alice.santos@example.com',
    department: 'Engineering',
    position: 'Senior Developer',
    role: 'admin'
  },
  {
    id: 2,
    firstname: 'Bob',
    lastname: 'Reyes',
    email: 'bob.reyes@example.com',
    department: 'Marketing',
    position: 'Marketing Analyst',
    role: 'user'
  },
  {
    id: 3,
    firstname: 'Charlie',
    lastname: 'Cruz',
    email: 'charlie.cruz@example.com',
    department: 'HR',
    position: 'HR Coordinator',
    role: 'guest'
  },
  {
    id: 4,
    firstname: 'Diana',
    lastname: 'Lim',
    email: 'diana.lim@example.com',
    department: 'Engineering',
    position: 'QA Engineer',
    role: 'user'
  },
  {
    id: 5,
    firstname: 'Edward',
    lastname: 'Tan',
    email: 'edward.tan@example.com',
    department: 'Finance',
    position: 'Finance Officer',
    role: 'admin'
  }
];
