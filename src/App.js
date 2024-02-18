// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import CBCRbcChart from "./components/CBCRbcChart";
import CBCWbcChart from "./components/CBCWbcChart";
import CBCHemoglobinChart from "./components/CBCHemoglobinChart";
import CBCPlateletsChart from "./components/CBCPlateletsChart";
import BloodTransfutionChart from "./components/BloodTransfutionChart";
import PlateletsTransfutionChart from "./components/PlateletsTransfutionChart";
import DataForm from "./components/DataForm";
import BloodTransfusedDataForm from "./components/BloodTransfusedDataForm";
import PlatelesTransfusedDataForm from "./components/PlateletesTransfusedDataForm";
const App = () => {
  const [hemoglobin, setHemoData] = useState([]);
  const [rbc, setRbcData] = useState([]);
  const [wbc, setWbcData] = useState([]);
  const [platelets, setPlateletsData] = useState([]);
  const [bloodTransfused, setBloodTransfusedData] = useState([]);
  const [plateletsTransfused, setPlateletsTransfusedData] = useState([]);
  const [totalBloodTransfusedCount, setTotalBloodTransfusedCountData] =
    useState([]);
  const [totalPlateletsTransfusedCount, setTotalPlateletsTransfusedCountData] =
    useState([]);
  const [
    freeFromPlateletTransfusionFromData,
    setFreeFromPlateletTransfusionFromData,
  ] = useState([]);
  const [
    freeFromBloodTransfusionFromData,
    setFreeFromBloodTransfusionFromDataData,
  ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseHemo = await axios.get(
          `https://backend.choreoapps.dev/api/getHemoglobinData`
        );
        setHemoData(responseHemo.data);
        const responseRbc = await axios.get(
          `https://backend.choreoapps.dev/api/getRbcData`
        );
        setRbcData(responseRbc.data);

        const responseWbc = await axios.get(
          `https://backend.choreoapps.dev/api/getWbcData`
        );
        setWbcData(responseWbc.data);

        const responsePlatelets = await axios.get(
          `https://backend.choreoapps.dev/api/getPlateletsData`
        );
        setPlateletsData(responsePlatelets.data);

        const responseBloodTransfused = await axios.get(
          `https://backend.choreoapps.dev/api/getBloodTransfusedData`
        );
        setBloodTransfusedData(responseBloodTransfused.data);

        const responsePlateletsTransfused = await axios.get(
          `https://backend.choreoapps.dev/api/getPlateletsTransfusedData`
        );
        setPlateletsTransfusedData(responsePlateletsTransfused.data);

        const responseTotalPlateletsTransfusedCount = await axios.get(
          `https://backend.choreoapps.dev/api/getTotalPlateletsCountData`
        );
        setTotalPlateletsTransfusedCountData(
          responseTotalPlateletsTransfusedCount.data[0].totalPlateletsCount
        );

        const responseTotalBloodTransfusedCount = await axios.get(
          `https://backend.choreoapps.dev/api/getTotalBloodCountData`
        );

        setTotalBloodTransfusedCountData(
          responseTotalBloodTransfusedCount.data[0].totalBloodCount
        );

        const responseFreeFromPlateletTransfusionFrom = await axios.get(
          `https://backend.choreoapps.dev/api/getFreeFromPlateletTransfusionFromData`
        );
        setFreeFromPlateletTransfusionFromData(
          responseFreeFromPlateletTransfusionFrom.data.plateletLasts
        );

        const responseFreeFromBloodTransfusionFromData = await axios.get(
          `https://backend.choreoapps.dev/api/getFreeFromBloodTransfusionFromData`
        );

        setFreeFromBloodTransfusionFromDataData(
          responseFreeFromBloodTransfusionFromData.data.bloodLasts
        );
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App" style={{ height: "400px" }}>
      <h1 style={{ textAlign: "center" }}>CBC Hemoglobin Data Visualization</h1>
      <h1 style={{ textAlign: "center" }}>
        Total Blood transfused = {totalBloodTransfusedCount}
      </h1>
      <h1 style={{ textAlign: "center" }}>
        Total Platelet transfused = {totalPlateletsTransfusedCount}
      </h1>
      <h1 style={{ textAlign: "center" }}>
        Blood Lasts = {freeFromBloodTransfusionFromData}
      </h1>
      <h1 style={{ textAlign: "center" }}>
        Platelet Lasts = {freeFromPlateletTransfusionFromData}
      </h1>
      <CBCHemoglobinChart data={hemoglobin} />
      <CBCRbcChart data={rbc} />
      <CBCWbcChart data={wbc} />
      <CBCPlateletsChart data={platelets} />
      <BloodTransfutionChart data={bloodTransfused} />
      <PlateletsTransfutionChart data={plateletsTransfused} />
      <DataForm />
      <BloodTransfusedDataForm />
      <PlatelesTransfusedDataForm />
    </div>
  );
};

export default App;
