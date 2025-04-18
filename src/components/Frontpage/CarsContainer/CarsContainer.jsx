import CarCard from './CarCard/CarCard';
import styles from './CarsContainer.module.css';

const CarsContainer = () => {
    const cars = [{name: "bmw", description: "E39", price: 3400}, {name: "audi", description: "A4", price: 5400}, {name: "mercedes", description: "C180", price: 7400},
        {name: "toyota", description: "Corolla", price: 8400}, {name: "ford", description: "Focus", price: 9400}, {name: "fiat", description: "Punto", price: 10400}, {name: "opel", description: "Astra", price: 11400}, {name: "peugeot", description: "308", price: 12400}, {name: "renault", description: "Clio", price: 13400}, {name: "skoda", description: "Octavia", price: 14400},
        {name: "nissan", description: "Qashqai", price: 15400}, {name: "honda", description: "Civic", price: 16400}, {name: "hyundai", description: "i30", price: 17400}, {name: "kia", description: "Ceed", price: 18400}, {name: "volkswagen", description: "Golf", price: 19400}, {name: "mazda", description: "3", price: 20400}, {name: "subaru", description: "Impreza", price: 21400}, {name: "mitsubishi", description: "Outlander", price: 22400}, {name: "suzuki", description: "Vitara", price: 23400}, {name: "land rover", description: "Defender", price: 24400}
    ];

    return (
        <div className={styles.CarsContainerRoot}>
        <div className={styles.CarsContainer}>
            {cars.map((car, index) => {
                return (
                    <CarCard key={index} carData={car} />
                );
            })}
        </div>
        </div>
    );
}
export default CarsContainer;