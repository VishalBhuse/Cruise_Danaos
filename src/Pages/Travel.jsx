import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Stack,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import {Rating} from './Rating'

const Travel = () => {
  const travel = [
    {
      imgurl:
        "https://s3-alpha-sig.figma.com/img/fd24/4663/3470b8c9e5f3548ceb7bcff1a320824a?Expires=1679875200&Signature=F2bPSCR2uEgMqO~zor3ehq66rQTnK1us4mImka2EuLfPg0aEucVz31Aw6W5Bamqs3wXPxO3HcBKTlJBOnZfegbLSDOUEsoM9PWOWe4OFd~IynMtkhT708SyMgp3n3hSuMAvktOsX9VjaSJXyYyqwsEZdPiy12K3QwZ~VDi7SmHnsKNwSZx2IrBhUTvUqCi96VOU2tG9bh5Wc~hhD4VSLtyImvZ0HwA4atV35t5wfwq-IOk-FGX4KaTUMRg3CFp4dr41TG3C8BU7Agb2S2b2DnJyAWica7Z4i0g3hFpywzR-7T9U4ihjIpzEePz1itPIenZGSAb3PgFFuqIBlbOlwng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading: "",
      title: "",
      rating: "",
      price: "",
    },
    {
      imgurl:
        "https://s3-alpha-sig.figma.com/img/e5bc/1185/133ed33a74ac8343dd81f04fcd427540?Expires=1679875200&Signature=Ug8PFbctB5pEU4WzFueBUbGooH0QDdIx8dsAXceQzaOlLWcZ4BD9bU1FS-OxiQTxYhmEz5GasyUCnbRzpzfQdD~c95-LVPm-pWpRiSqlil8SxTolrXg7zTGBfhz8qZKj1P5OW~DbmbLRJvP0diYCBtYsHiAP8rcuwPPPnVCNqyFrmuAuw1fVhBBi4AfJGY1P7f6LpvKL0CXGukce5k8v~OMMssZhaiE-ULqKnMf5G1grT3xfwvGZzBrQTv8q186J7V5t0Pl8l~xnM5SIgT82nvkU-Pof-9Xh1e9KTLI-7SGPa5reBJROVFrbJvS8oig6hbcxMM~jmQdv1ciJE3ztAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading: "",
      title: "",
      rating: "",
      price: "",
    },
    {
      imgurl:
        "https://s3-alpha-sig.figma.com/img/3b45/b3ab/c971e33163a0e35cb71ebfec29528a53?Expires=1679875200&Signature=SDY3mcdZdq0fq-jgdPmxa2taaCpk3j4Ejn~RQ9AO7yRFk37pDWM0XJnQX2kUNqwun1Apt4Lwp0gpHval-onkgDQh9eWZCPzcIymBiRFpmu1Ia-RqmPS1mxmtVpPm2P1daEQgGdxa7JxK-VxdSqi08dxEwn4gxe9zKGIOvTPG9ee43yrroN-9HmtfkvR9M62Ndj1idgIX9RKlFqMsgz0040BXGQWuQB0ZuZXMv~k4H86hXKaBwfQOWLggXEG5kE~yQa~4UwtKsawd-cACpwtH6UX6vgfxjFgQIYXTTv9s7sEL6cUirAc0eam00i~b2Rcv2qep2Gq3O000wfWrvL-PuQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading: "",
      title: "",
      rating: "",
      price: "",
    },
    {
      imgurl:
        "https://s3-alpha-sig.figma.com/img/ba47/a80e/e6c7ee9b4a8d3d38fb07c4303bc75853?Expires=1679875200&Signature=fGvvbX2TefCAIb~9y9PvaEFha-MJZYdt~Mx4lISpRRSSjf9hqBzsd9vChdLTlrtaf-TksrfXtIMP5-B5bdQxZnrrWM9~dmCwywwGykbpNDgl7B1TtZ--q7fDWgOmIYaIYocNRoYuH9Tu4e55Gmlx4AKY9PtxANWx6ktCmYmuNmSfJihbslZubYk-fkmcmNPArMSCueLmX5h3tWACFg3xYEQ4cAqm2Va1gfsYgzDelp4v8ApUSz3feSiSQP3sKXkwpDXgq9ndZzEqm4EF-5HqAXf0dMDsVq9kjagwWn4oBPks8boqlKtWN9WPbn1K8dNKWa7c2Hst5RCmb6ABXToJgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading: "",
      title: "",
      rating: "",
      price: "",
    },
    {
      imgurl:
        "https://s3-alpha-sig.figma.com/img/3d86/15a5/e7171c916af5621a102dada894f93d00?Expires=1679875200&Signature=mcFJBToQxQeKX1WHFcSFSIGKeM~pm651aE92DK1A9eAMePO354sdMycnCTzIadGE-w4zHMMxxgSY3Ko-FmRTK4nd9pu1BwQaiXQ-wvioz40uRSxwUhOfW7jwQj9T8B7Y5LyUTxmsHPB54p2dh~xwecB7iWe0V50J7h0CKIbzKtG2GhKglOJdJl1Cx4W1lCSUClftvxQdvqMdXPR2vKIerIZxLYhV3V9z1MzBDOfBaCabL6xcpSuQlLqiCQTxnEX0fk3jwsRCuEmzOmVd5Xh9Cz93WyowkY1zMBc3YALbrXdIDPG5Tml4WyOqF9oBy-vWiBmZW1ok-AfTm8kzns9dKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading: "",
      title: "",
      rating: "",
      price: "",
    },
    {
      imgurl:
        "https://s3-alpha-sig.figma.com/img/39b9/7dd4/fa8a1a8e5006aa13788d1b57c7d2b754?Expires=1679875200&Signature=UcKe8ruKlvYA6xuJtHTmuAnyaorfZFVhRbwa6b9DnfSw88AQCt3qqiMQ6NuU7fsRiX6POeK~08d9DNkX3~y-LYJ6KkivUVTugZnubReaZzeTul6kevvFtpBuDbLec~2Cxw7VKtYqv5Yi43Htl0var-zSTC4iWeW7pqdyGfmNPW-gJO~O84Ag3LuWjtvpiYZnyQhUsiv3sbZCOSEGhAmZ3uy4TC4kSCbIiJtzSRRw-Cqdx0IZoxprYWt~VrEEP0yu7Yy8nTBLdPCkvSvXJvj3jG8S7lK-hbUcb08yFkqmRXORQS4-9Ck8dkMSBWLLzqcwSvO~NWdUpqBXbn23D0sztA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading: "",
      title: "",
      rating: "",
      price: "",
    },
  ];
  return (
    <Box>
      <Heading fontSize={"24px"} fontFamily={"Lexend"} fontWeight={800}>Best Travel Deal’s</Heading>
      <hr style={{height:"5px"}}/>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} m={5}>
        {travel &&
          travel.map((e) => (
            <GridItem>
              <Image height={"280px"} width={"433px"} src={e.imgurl} />
              <Stack backgroundColor={"#F2CD5B"} p={5}>
                <Text fontSize={"24px"} fontFamily={"Lexend"} fontWeight={800}>Lorem ipsum dolor sit amet</Text>
                <Text fontSize={"24px"} fontFamily={"Lexend"} fontWeight={800}>
                Lorem Ispum
                </Text>
                <Stack>
                  <Box fontWeight={800} fontSize={"xl"} fontFamily={"Lexend"}>
                     <Rating stars={4.5}/>
                  </Box>
                  <Flex>
                    <Text fontSize={"24px"} fontFamily={"Lexend"} fontWeight={800}>Start From - <span style={{color:"#277E1F"}}>Rs 7000</span></Text>
                    <Spacer />
                    <Image src={'./img/add.png'} height={'40px'} width={'40px'}/>
                  </Flex>
                </Stack>
              </Stack>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};

export default Travel;
