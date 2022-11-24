

import { Box, Flex, GridItem, Grid, Text ,Spacer} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { GoChevronDown } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Checkbox, CheckboxGroup ,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Radio

} from '@chakra-ui/react'
import ProductBox from '../Components/ProductBox/ProductBox';
import { FiCheckCircle } from 'react-icons/fi';

function Skincare() {
  const breakpoints = {
    
    lg: '1024',
    md: '786',
    sm: '480',
   
  }
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [order, setOrder] = useState("");
  const [prod, setProd] = useState('');
  async function getData(url) {
    try {
      //setLoading(true)
      var res = await fetch(url)
      var res2 = await res.json();
      console.log(res2);
      setData(res2);
    }
    finally {
      setLoading(false);
    }

  }
  function changeUrlOrder(order) {
    setOrder(order);

  }
  function changeUrlType(prod) {
    setProd(prod)

  }
  useEffect(() => {
    let url = "https://cosmeticsapi1.herokuapp.com/Skincare"
    if (prod.length !== 0 && order.length !== 0)
      url = `https://cosmeticsapi1.herokuapp.com/Skincare?_sort=price&_order=${order}&q=${prod}`
    else if (prod.length !== 0)
      url = `https://cosmeticsapi1.herokuapp.com/Skincare?q=${prod}`
    else if (order.length !== 0)
      url = `https://cosmeticsapi1.herokuapp.com/Skincare?_sort=price&_order=${order}`

    getData(url);

  }, [order, prod])
  //getData();
  if (loading) {

  }

  return (
    <div >
<Flex bg='white' h='50px' alignItems='center'>
            <Box ml='30px' mr='15px'>
             <Link to='/'>Home</Link>    
                </Box>
            <MdKeyboardArrowRight />
            <Box ml='15px' fontWeight='600'>Skincare</Box>
            <Spacer />
        </Flex>
      <Flex flexDirection={{lg:'row',md:'column',sm:'column'}}>
        <Box display='flex' flexDirection='column' w={{lg:'25%',md:'35%',sm:'50%'}} h='min-content' m='15px' gap='10px'  >
          <Box  >
            {/* <Menu matchWidth='true'>
              <MenuButton as={Button} bg='white' w='80%' >
                <Flex >
                  <Flex justifyContent='flex-start' gap='10px' >
                    <Text>Sort By:</Text>
                    <Text>Relevance</Text>
                  </Flex>
                  <Box m='auto' ml='35px'  ><GoChevronDown /></Box>
                </Flex>

              </MenuButton>
              <MenuList>
                <MenuItemOption onClick={() => changeUrlOrder("")} >Relevance</MenuItemOption>
                <MenuItemOption onClick={() => changeUrlOrder("asc")}>Price:Low To High</MenuItemOption>
                <MenuItemOption onClick={() => changeUrlOrder("desc")}>Price:Hight To Low</MenuItemOption>
              </MenuList>
            </Menu> */}





<Accordion defaultIndex={[0]} allowMultiple bg={"white"} width="80%"  margin={"auto"} borderRadius={"10"} >
 
 
 
 
   <AccordionItem isFocusable="false"  >
 
     
     <h2 >
       <AccordionButton _hover={{background:"white", borderRadius:"10"}} >
         <Box flex='1' fontWeight={"bold"} textAlign='left'>
         Sort By: Relevance
         </Box>
         <Text marginRight={"10px"}><AiFillCloseCircle /></Text>
         <AccordionIcon />
       </AccordionButton>
     </h2>
     <AccordionPanel textAlign={"left"} display="block" >
     <Radio value='1'>
      Low to Hight
    </Radio><br />
    <Radio  value='1'>
       Hight to Low
    </Radio><br />
     
         
 
     </AccordionPanel>
   </AccordionItem>
 </Accordion>




          </Box>
          <Box >
            {/* <Menu matchWidth='true'>
              <MenuButton as={Button} bg='white' w='80%' >
                <Flex >
                  <Flex justifyContent='flex-start' gap='10px' >
                    <Text>Filter By:</Text>
                    <Text>Product Type</Text>
                  </Flex>
                  <Box m='auto'  ><GoChevronDown /></Box>

                </Flex>

              </MenuButton>
              <MenuList > */}
               
                {/* <MenuItemOption onClick={() => changeUrlType("mask")}>Face Mask</MenuItemOption>
                <MenuItemOption onClick={() => changeUrlType("acne")}>Acne Care </MenuItemOption>
                <MenuItemOption onClick={() => changeUrlType("moisturizer")}>Face Cream</MenuItemOption>
                <MenuItemOption onClick={() => changeUrlType("serum")}>Face Serum</MenuItemOption>
                <MenuItemOption onClick={() => changeUrlType("")}>Reset Filters</MenuItemOption> */}



<Accordion defaultIndex={[0]} allowMultiple bg={"white"} width="80%"  margin={"auto"} borderRadius={"10"} >
 

<AccordionItem isFocusable="false" border="none"  >

    
<h2 >
  <AccordionButton _hover={{background:"white", borderRadius:"10"}} gap={5}>
    <Box flex='1' fontWeight={"bold"} textAlign='left'>
     Filtrs
    </Box>
    <Text fontSize={"15px"} color={"red"}>Reset</Text>
  </AccordionButton>
</h2>

</AccordionItem>



  <AccordionItem isFocusable="false"  >

    
    <h2 >
      <AccordionButton _hover={{background:"white", borderRadius:"10"}} >
        <Box flex='1' fontWeight={"bold"} textAlign='left'>
          Product Type
        </Box>
        <Text marginRight={"13px"} fontSize={"10px"} color={"red"}>Clear All</Text>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel textAlign={"left"} display="block" >
    <Checkbox defaultChecked>Face Mask</Checkbox><br />
    <Checkbox defaultChecked>Acne Care</Checkbox><br />
    <Checkbox defaultChecked>Face Cream</Checkbox><br />
    <Checkbox defaultChecked>Face Serum</Checkbox><br />
    
        

    </AccordionPanel>
  </AccordionItem>
</Accordion>

              {/* </MenuList>
            </Menu> */}


















          </Box>
        </Box>
        <Grid display='grid' templateColumns={{ lg:'repeat(3,1fr)',md:'repeat(2,1fr)',sm:'repeat(1,1fr)'}} w='75%' m='10px'>

          {data.map((elem) => (elem.price !== undefined && <GridItem><ProductBox rating={elem.rating} catg={elem.catg} id={elem.id} url={elem.image} description={elem.name} price={elem.price} /></GridItem>))}


        </Grid>
      </Flex>






    </div>
  )
}

export default Skincare