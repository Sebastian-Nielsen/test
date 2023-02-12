import React, {useState} from "react";

export const App = () => {
    const [data, setData] = useState(null);

    const worker = new SharedWorker(
        new URL('./sharedWorker.js', import.meta.url)
    );

    worker.port.onmessage = ({data}) => {
        console.log("data:", data)
        setData(data)
    };

    return <>
        <p>Data is: {JSON.stringify(data)}</p>
        <button onClick={() => {
            console.log("messaging sharedworker")
            worker.port.postMessage({msg: "send me # of browserInstances"});
        }}>
            send message to shared-worker
        </button>
    </>;
}
