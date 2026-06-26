async function sendTest() {
    const status = document.getElementById("status");

    status.innerText = "Sending request...";

    try {
        const response = await fetch("YOUR_FLOW_URL", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ test: "hello" })
        });

        if (response.ok) {
            status.innerText = "✅ Flow triggered successfully!";
        } else {
            status.innerText = "❌ Flow error";
        }

    } catch (err) {
        status.innerText = "❌ Cannot reach flow";
        console.error(err);
    }
}
