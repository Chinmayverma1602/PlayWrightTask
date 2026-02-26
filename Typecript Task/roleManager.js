// 1️ User Role Manager using Type Alias with Union Types

function assignRole(role) {
    console.log(`Assigned role: ${role}`);
}

assignRole("admin");
// assignRole("manager");  Not allowed

module.exports = { assignRole };
