interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserManager {
  private users: User[] = [];

  addUser(name: string, email: string): User {
    const newUser: User = {
      id: this.users.length + 1,
      name,
      email,
      isActive: true,
    };
    this.users.push(newUser);
    console.log(`User ${name} added successfully`);
    return newUser;
  }

  getUser(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users.filter((user) => user.isActive);
  }

  deactivateUser(id: number): boolean {
    const user = this.getUser(id);
    if (user) {
      user.isActive = false;
      console.log(`User ${user.name} deactivated`);
      return true;
    }
    return false;
  }
}

// Usage example
const userManager = new UserManager();
userManager.addUser('John Doe', 'john@example.com');
userManager.addUser('Jane Smith', 'jane@example.com');

console.log('All active users:', userManager.getAllUsers());
