import CreateCarForm from "./create-car-form/CreateCarForm";
import { CarService } from "../../../services/car.service";

import { useQuery } from "@tanstack/react-query";
import Catalog from "../../ui/Catalog";
import Header from "../../ui/Header";

function Home() {
    const { data, isLoading } = useQuery(["cars"], () => CarService.getAll());

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Cars catalog</h1>
            <Header />
            <CreateCarForm />
            <Catalog data={data} />
        </div>
    );
}

export default Home;
