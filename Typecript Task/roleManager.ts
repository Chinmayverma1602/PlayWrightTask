// 1️ User Role Manager using Type Alias with Union Types

type UserRole = "admin" | "editor" | "viewer";

function assignRole(role: UserRole): void {
    console.log(`Assigned role: ${role}`);
}

assignRole("admin");
// assignRole("manager");  Not allowed

export { assignRole, UserRole };
