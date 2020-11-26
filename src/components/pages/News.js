import React, { useState } from "react"
import Axios from "axios"
import Jumbotron from "../../components/layout/Jumbotron"
import NewsList from "../../components/layout/NewsList"
import Background from "../../assets/images/Jumbotron_1.jpg";

const api = Axios.create({
    baseURL: `https://api.chucknorris.io/jokes/random`
    })

export const News = () => {

    return (
        <div>
            <Jumbotron 
            h1={"Read about FakePage"}
            p={"“Nobody realizes that some people expend tremendous energy merely to be normal.”"}
            background={Background}
            />
            <div className="d-flex justify-content-center newsDiv">
                <NewsList />
            </div>
        </div>
    )
}

