import { Center } from "@chakra-ui/react";
import { notFound } from "next/navigation";

export default function SomeRoute() {
    return <Center h="80vh">
        <p>User Not found 404</p>
    </Center>
}