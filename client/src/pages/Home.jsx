import { Badge, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import Recipe from '../components/dashboard/Recipe'
import { FaThList } from 'react-icons/fa'


export default function Home() {
  return (
    <div className=' font-Archivo'>
      <h2 className='text-center text-5xl mb-6 mt-9 font-Peralta text-purple-400'>Tarifleri Keşfet</h2>


      <Stack direction='row' className='mb-8 justify-center' spacing={3}>
      <Button leftIcon={<FaThList/>} colorScheme='teal' variant='outline'>
          Öğrenci Tarifleri
        </Button>
        <Button leftIcon={<FaThList/>} colorScheme='red' variant='outline'>
          Sağlıklı
        </Button>
        <Button leftIcon={<FaThList/>} colorScheme='yellow' variant='outline'>
          Pratik
        </Button>
        <Button leftIcon={<FaThList/>} colorScheme='blue' variant='outline'>
          Fit Tatlılar
        </Button>
        <Button leftIcon={<FaThList/>} colorScheme='purple' variant='outline'>
          Sporcu Öğünleri
        </Button>
      </Stack>


      <div class="grid grid-cols-4 gap-3">
        <Recipe />
        <Recipe />

        <Recipe />

        <Recipe />

        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />

   
      </div>
    </div>
  )
}
