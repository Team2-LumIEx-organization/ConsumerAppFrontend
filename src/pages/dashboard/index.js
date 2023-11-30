import React, { useContext, useEffect, useState } from 'react'
import MainContext from "../../MainContext";
import { AuthorizedBackground } from '../../components/base/common'
import Tabs from "../../components/base/Tabs";
import SentCard from "../../components/sent-card";
import ReceivedCard from "../../components/recieved-card";

const DashboardPage = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const { sentParcels, recivedParcels, getSentParcelsContext, getRecivedParcelsContext } = useContext(MainContext).dashboard;
    useEffect(() => {
        getSentParcelsContext()
        getRecivedParcelsContext()
    }, [])

    console.log('asdasd', sentParcels, recivedParcels)


    return (
        <AuthorizedBackground>
            <Tabs
                selectedTab={selectedTab}
                onTabClick={setSelectedTab}
                tabs={[{
                    name: 'Sent',
                    id: 0,
                }, {
                    name: 'Recieved',
                    id: 1
                }]}
            />
            <SentCard item={{name: 'Parcel Name', delivery_status: "Delivery Status", reciver: "Reciever"}} title={true}/>
            {selectedTab === 0 && sentParcels && sentParcels.map(item => {
                return (
                    <SentCard item={item}/>
                )
            })}
            {selectedTab === 1 && recivedParcels && recivedParcels.map(item => {
                return (
                    <ReceivedCard item={item}/>
                )
            })}
        </AuthorizedBackground>
    )
}

export default DashboardPage