// 10️ User Data Fetch using Async/Await with Error Handling

async function fetchUsers(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("Users:", data);
    } catch (error) {
        console.error("Error fetching users:", error);
    } finally {
        console.log("User fetch completed.");
    }
}

export { fetchUsers };
