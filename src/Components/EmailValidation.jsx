
// function LinkValidation() {
//   const [url, setUrl] = useState("");
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   const checkLink = async () => {
//     if (!url) {
//       setStatus("Please enter a URL.");
//       return;
//     }

//     setLoading(true);
//     setStatus("");

//     try {
//       const formattedUrl = url.startsWith("http") ? url : `https://${url}`;

//       const response = await axios.get(formattedUrl);

//       if (response.status === 200) {
//         setStatus("✅ Link is available!");
//       } else {
//         setStatus(`⚠️ Link responded with status: ${response.status}`);
//       }
//     } catch (error) {
//       setStatus("❌ Link is not reachable.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
//       <h1>🔗 Link Availability Checker</h1>

//       <input
//         type="text"
//         placeholder="Enter URL..."
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         style={{ width: "80%", padding: "10px", margin: "20px 0" }}
//       />
//       <br />
//       <button onClick={checkLink} style={{ padding: "10px 20px" }}>
//         Check Link
//       </button>

//       {loading && <p>Checking link...</p>}
//       {status && <p style={{ marginTop: "20px", fontWeight: "bold" }}>{status}</p>}
//     </div>
//   );
// }

// export default LinkValidation;
