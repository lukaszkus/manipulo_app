import React from 'react'
import './SelectColor.scss'

function SelectColor({ onSelection, setPrice }) {
    return (
        <div className="animate">
            <div className="selectColor">
                <div className="selectColor__container">
                    <p className="color-prices">biały - 45 zł</p>
                    <div className="boxes">
                        <div className="selectColor__box">
                            <div className="color-box white"
                                onClick={() => {
                                    onSelection("biały");
                                    setPrice("45");
                                }}>
                            </div>
                            <p className="color-name">biały</p>
                        </div>
                    </div>
                </div>
                <div className="selectColor__container">
                    <p className="color-prices">kolor - 75 zł</p>
                    <div className="boxes">
                        <div className="selectColor__box">
                            <div className="color-box light-grey"
                                onClick={() => {
                                    onSelection("jasny szary")
                                    setPrice("75");
                                }}>
                            </div>
                            <p className="color-name">jasny szary</p>
                        </div>
                        <div className="selectColor__box">
                            <div className="color-box dark-grey"
                                onClick={() => {
                                    onSelection("grafit")
                                    setPrice("75");
                                }}>
                            </div>
                            <p className="color-name">grafit</p>
                        </div>
                        <div className="selectColor__box">
                            <div className="color-box black"
                                onClick={() => {
                                    onSelection("czarny")
                                    setPrice("75");
                                }}>
                            </div>
                            <p className="color-name">czarny</p>
                        </div>
                        <div className="selectColor__box">
                            <div className="color-box light-blue"
                                onClick={() => {
                                    onSelection("niebieski jasny")
                                    setPrice("75");
                                }}>
                            </div>
                            <p className="color-name">niebieski jasny</p>
                        </div>
                        <div className="selectColor__box">
                            <div className="color-box blue"
                                onClick={() => {
                                    onSelection("niebieski")
                                    setPrice("75");
                                }}>
                            </div>
                            <p className="color-name">niebieski</p>
                        </div>
                        <div className="selectColor__box">
                            <div className="color-box pink"
                                onClick={() => {
                                    onSelection("róż")
                                    setPrice("75");
                                }}>
                            </div>
                            <p className="color-name">róż</p>
                        </div>
                        <div className="selectColor__box">
                            <div className="color-box red"
                                onClick={() => {
                                    onSelection("czerwony")
                                    setPrice("75");
                                }}>
                            </div>
                            <p className="color-name">czerwony</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectColor;
