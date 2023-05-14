import {
  Box,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  useColorModeValue,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react'

export const SkeletonCard = () => {
  return (
    <Card m="3">
      <CardBody>
        <Box maxW={{ base: '100%', md: '92.5%' }}>
          <Skeleton height="100px" />
        </Box>
        <Stack mt="6" spacing="3">
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Stack>
      </CardBody>
      <Divider borderColor={useColorModeValue('gray.300', 'gray.600')} />
      <CardFooter>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </CardFooter>
    </Card>
  )
}
