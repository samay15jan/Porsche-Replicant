import React from 'react'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import { useSelector } from 'react-redux';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Container = styled.div`${tw`w-screen`}`
const Heading = styled.div`${tw`flex justify-center text-2xl lg:text-4xl font-bold mt-20 pt-20 pb-5`}`
const SubContainer = styled.div`${tw`grid grid-cols-1 mx-4 lg:mx-48`}`
const Text1 = styled.div`${tw`text-sm lg:text-2xl mt-4 mb-2`}`
const Text2 = styled.div`${tw`text-sm lg:text-xl mt-4 mb-2`}`
const Text3 = styled.div`${tw`mx-4 lg:mx-48 text-sm font-bold mt-10`}`
const Text4 = styled.div`${tw`mx-4 lg:mx-48 text-sm mt-4 mb-10`}`
const Divider = styled.hr`${tw`my-5 border border-gray-300 mx-5`}`
const Flex = styled.div`${tw`flex justify-between`}`

const Summary = ({ data }) => {
    const WheelsData = useSelector((state) => state.config.SelectedWheel)
    const InteriorData = useSelector((state) => state.config.SelectedInterior)
    const OptionsData = useSelector((state) => state.config.SelectedOptions)
    const TechnologyData = useSelector((state) => state.config.SelectedTechnology)

    const WheelsPrice = WheelsData[0]?.price.price
    const InteriorPrice = InteriorData[0]?.price.price

    const OptionsPrice = OptionsData[0]?.reduce((total, data) => {
        return total + parseInt(data.cost, 10);
    }, 0);

    const TechnologyPrice = TechnologyData[0]?.reduce((total, data) => {
        return total + parseInt(data.cost, 10);
    }, 0);

    const EquipmentsPrice = WheelsPrice + InteriorPrice + OptionsPrice + TechnologyPrice + 1650 + 1300
    const TotalPrice =  parseInt(data.MSRP, 10) + EquipmentsPrice

    return (
        <Container>
            <Heading>Summary</Heading>
            <Divider />
            <SubContainer>
                    <Text1>Your {data.Name} Configuration</Text1>
                    <Flex>
                        <Text2>Base Price</Text2>
                        <Text2>$ {parseInt(data.MSRP, 10).toLocaleString()}</Text2>
                    </Flex>
                    <Flex>
                        <Text2>Price for Equipment</Text2>
                        <Text2>$ {EquipmentsPrice.toLocaleString()}</Text2>
                    </Flex>
                    <Flex>
                        <Text2>Delivery, Processing and Handling Fee</Text2>
                        <Text2>$ 1,650</Text2>
                    </Flex>
                    <Flex>
                        <Text2>Gas Guzzler Tax</Text2>
                        <Text2>$ 1,300</Text2>
                    </Flex>
                    <Divider />
                    <Flex>
                        <Text1>Total Price*</Text1>
                        <Text2>$ {TotalPrice.toLocaleString()}</Text2>
                    </Flex>
                    <Divider />
            </SubContainer>
	    <Text3><InfoOutlinedIcon/> Information for our customers:</Text3>
	    <Text4>
	    While we strive for accurate configurator visualizations, there are some options that may not be rendering accurately at this time. We are working on this, but in the meantime, we recommend consulting with your Porsche Center for the final details. Thank you!
	    </Text4>
        </Container>
    )
}

export default Summary

