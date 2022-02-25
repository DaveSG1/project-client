import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Ficha from "../components/Ficha";

export default function FichaPage() {
  const { id } = useParams();

  const [ficha, setFicha] = useState({});

  const URL = `http://localhost:8000/api/rides/read/route/${id}`;

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => setFicha(data["data"]));
  }, [URL]);

  return (
    <div>
      <div className="BrowserCardStyle">
        <Ficha ficha={ficha} />
      </div>
    </div>
  );
}
