import React from "react";

function Home() {
    return (
        <div>
            <div>
                <img alt="" src="https://piranhavending.com/wp-content/uploads/2021/01/Vending-Machine-G638-All-Snack.jpg"/>
            </div>
            <div>
                <p>What would you like?</p>
                <ol>
                    <li><a href="/pizza">Pizza</a></li>
                    <li><a href="/tea">Arizona Tea</a></li>
                    <li><a href="/desire">Your greatest desire</a></li>
                </ol>
            </div>
        </div>
    );
}

export default Home;