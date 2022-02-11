import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Route } from 'react-router-dom';

import Home from './Home';

const data = [
  {
    page: 1,
    per_page: 15,
    photos: [
      {
        id: 758898,
        width: 3852,
        height: 2832,
        url: 'https://www.pexels.com/photo/wedding-couple-taking-a-traditional-ceremony-758898/',
        photographer: 'Min An',
        photographer_url: 'https://www.pexels.com/@minan1398',
        photographer_id: 206851,
        avg_color: '#7E7284',
        src: {
          original:
            'https://images.pexels.com/photos/758898/pexels-photo-758898.png',
          large2x:
            'https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Wedding Couple Taking a Traditional Ceremony',
      },
      {
        id: 3916019,
        width: 4480,
        height: 6720,
        url: 'https://www.pexels.com/photo/photo-of-woman-wearing-bridal-gown-3916019/',
        photographer: 'Avonne Stalling',
        photographer_url: 'https://www.pexels.com/@avonnephoto',
        photographer_id: 2238448,
        avg_color: '#B3AEA4',
        src: {
          original:
            'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg',
          large2x:
            'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Photo Of Woman Wearing Bridal Gown ',
      },
      {
        id: 3014937,
        width: 3744,
        height: 5616,
        url: 'https://www.pexels.com/photo/standing-woman-wearing-white-long-sleeved-dress-3014937/',
        photographer: 'Orione  Conceição',
        photographer_url: 'https://www.pexels.com/@orione-conceicao-1531154',
        photographer_id: 1531154,
        avg_color: '#4B4B44',
        src: {
          original:
            'https://images.pexels.com/photos/3014937/pexels-photo-3014937.jpeg',
          large2x:
            'https://images.pexels.com/photos/3014937/pexels-photo-3014937.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/3014937/pexels-photo-3014937.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/3014937/pexels-photo-3014937.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/3014937/pexels-photo-3014937.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/3014937/pexels-photo-3014937.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/3014937/pexels-photo-3014937.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/3014937/pexels-photo-3014937.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Standing Woman Wearing White Long-sleeved Dress',
      },
      {
        id: 3491999,
        width: 4318,
        height: 2879,
        url: 'https://www.pexels.com/photo/men-wearing-suit-kissing-in-front-of-people-3491999/',
        photographer: 'Wallace Araujo',
        photographer_url: 'https://www.pexels.com/@wallace-araujo-1882815',
        photographer_id: 1882815,
        avg_color: '#5F5347',
        src: {
          original:
            'https://images.pexels.com/photos/3491999/pexels-photo-3491999.jpeg',
          large2x:
            'https://images.pexels.com/photos/3491999/pexels-photo-3491999.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/3491999/pexels-photo-3491999.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/3491999/pexels-photo-3491999.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/3491999/pexels-photo-3491999.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/3491999/pexels-photo-3491999.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/3491999/pexels-photo-3491999.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/3491999/pexels-photo-3491999.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Men Wearing Suit Kissing in Front of People',
      },
      {
        id: 1185244,
        width: 3789,
        height: 5337,
        url: 'https://www.pexels.com/photo/woman-in-black-dress-and-men-in-gray-dress-shirt-1185244/',
        photographer: 'Agung Pandit Wiguna',
        photographer_url: 'https://www.pexels.com/@panditwiguna',
        photographer_id: 305072,
        avg_color: '#474845',
        src: {
          original:
            'https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg',
          large2x:
            'https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Woman in Black Dress and Men in Gray Dress Shirt',
      },
      {
        id: 3354636,
        width: 4480,
        height: 5600,
        url: 'https://www.pexels.com/photo/two-women-standing-on-stairway-near-plant-3354636/',
        photographer: 'Brianna Amick',
        photographer_url: 'https://www.pexels.com/@brianna-swank-bbm',
        photographer_id: 401671,
        avg_color: '#A3A39C',
        src: {
          original:
            'https://images.pexels.com/photos/3354636/pexels-photo-3354636.jpeg',
          large2x:
            'https://images.pexels.com/photos/3354636/pexels-photo-3354636.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/3354636/pexels-photo-3354636.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/3354636/pexels-photo-3354636.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/3354636/pexels-photo-3354636.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/3354636/pexels-photo-3354636.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/3354636/pexels-photo-3354636.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/3354636/pexels-photo-3354636.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Two Women Standing on Stairway Near Plant',
      },
      {
        id: 936225,
        width: 5212,
        height: 5212,
        url: 'https://www.pexels.com/photo/woman-in-white-sleeveless-dress-and-man-on-blue-blazer-936225/',
        photographer: 'mentatdgt',
        photographer_url: 'https://www.pexels.com/@mentatdgt-330508',
        photographer_id: 330508,
        avg_color: '#373F40',
        src: {
          original:
            'https://images.pexels.com/photos/936225/pexels-photo-936225.jpeg',
          large2x:
            'https://images.pexels.com/photos/936225/pexels-photo-936225.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/936225/pexels-photo-936225.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/936225/pexels-photo-936225.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/936225/pexels-photo-936225.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/936225/pexels-photo-936225.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/936225/pexels-photo-936225.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/936225/pexels-photo-936225.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Woman in White Sleeveless Dress and Man on Blue Blazer',
      },
      {
        id: 4611741,
        width: 4160,
        height: 6240,
        url: 'https://www.pexels.com/photo/men-holding-hands-4611741/',
        photographer: 'Anna Shvets',
        photographer_url: 'https://www.pexels.com/@shvetsa',
        photographer_id: 1984515,
        avg_color: '#C5807E',
        src: {
          original:
            'https://images.pexels.com/photos/4611741/pexels-photo-4611741.jpeg',
          large2x:
            'https://images.pexels.com/photos/4611741/pexels-photo-4611741.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/4611741/pexels-photo-4611741.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/4611741/pexels-photo-4611741.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/4611741/pexels-photo-4611741.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/4611741/pexels-photo-4611741.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/4611741/pexels-photo-4611741.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/4611741/pexels-photo-4611741.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Men Holding Hands',
      },
      {
        id: 3818650,
        width: 5600,
        height: 4480,
        url: 'https://www.pexels.com/photo/woman-in-white-floral-dress-kissing-woman-in-white-dress-3818650/',
        photographer: 'Brianna Amick',
        photographer_url: 'https://www.pexels.com/@brianna-swank-bbm',
        photographer_id: 401671,
        avg_color: '#949388',
        src: {
          original:
            'https://images.pexels.com/photos/3818650/pexels-photo-3818650.jpeg',
          large2x:
            'https://images.pexels.com/photos/3818650/pexels-photo-3818650.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/3818650/pexels-photo-3818650.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/3818650/pexels-photo-3818650.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/3818650/pexels-photo-3818650.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/3818650/pexels-photo-3818650.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/3818650/pexels-photo-3818650.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/3818650/pexels-photo-3818650.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Woman in White Floral Dress Kissing Woman in White Dress',
      },
      {
        id: 2253870,
        width: 6016,
        height: 4016,
        url: 'https://www.pexels.com/photo/man-and-woman-kissing-2253870/',
        photographer: 'Emma Bauso',
        photographer_url: 'https://www.pexels.com/@emma-bauso-1183828',
        photographer_id: 1183828,
        avg_color: '#B4A497',
        src: {
          original:
            'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
          large2x:
            'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Man And Woman Kissing',
      },
      {
        id: 313707,
        width: 5616,
        height: 3744,
        url: 'https://www.pexels.com/photo/wedding-preparation-313707/',
        photographer: 'Terje Sollie',
        photographer_url: 'https://www.pexels.com/@solliefoto',
        photographer_id: 64844,
        avg_color: '#999592',
        src: {
          original:
            'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg',
          large2x:
            'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Wedding Preparation',
      },
      {
        id: 948185,
        width: 3175,
        height: 4762,
        url: 'https://www.pexels.com/photo/man-and-woman-kissing-948185/',
        photographer: 'Rocsana Nicoleta Gurza',
        photographer_url: 'https://www.pexels.com/@rocsana99',
        photographer_id: 342310,
        avg_color: '#454338',
        src: {
          original:
            'https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg',
          large2x:
            'https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Man and Woman Kissing',
      },
      {
        id: 1444442,
        width: 4512,
        height: 3008,
        url: 'https://www.pexels.com/photo/two-person-holding-hands-1444442/',
        photographer: 'viresh studio',
        photographer_url: 'https://www.pexels.com/@weddingphotography',
        photographer_id: 568114,
        avg_color: '#5A5D61',
        src: {
          original:
            'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
          large2x:
            'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Two Person Holding Hands',
      },
      {
        id: 265722,
        width: 3840,
        height: 5760,
        url: 'https://www.pexels.com/photo/adult-bride-celebration-ceremony-265722/',
        photographer: 'Pixabay',
        photographer_url: 'https://www.pexels.com/@pixabay',
        photographer_id: 2659,
        avg_color: '#919181',
        src: {
          original:
            'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg',
          large2x:
            'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Aerial Photo of Man and Woman Lying on Grass Field',
      },
      {
        id: 1024993,
        width: 3840,
        height: 2563,
        url: 'https://www.pexels.com/photo/man-and-woman-walking-of-body-of-water-1024993/',
        photographer: 'Asad Photo Maldives',
        photographer_url: 'https://www.pexels.com/@asadphotography',
        photographer_id: 45786,
        avg_color: '#838C87',
        src: {
          original:
            'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
          large2x:
            'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
          large:
            'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
          medium:
            'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
          small:
            'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
          portrait:
            'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
          landscape:
            'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
          tiny: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
        },
        alt: 'Man and Woman Walking of Body of Water',
      },
    ],
    total_results: 8000,
    next_page:
      'https://api.pexels.com/v1/search/?page=2\u0026per_page=15\u0026query=wedding',
  },
];

const server = setupServer(
  rest.get(
    'https://protected-taiga-89091.herokuapp.com/api/card',
    (req, res, ctx) => {
      return res(ctx.json(data));
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test.only('renders detail when routing', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Route path="/">
        <Home />
      </Route>
    </MemoryRouter>
  );
  const text = screen.findByText(/click on slides for details/i);
  expect(text).toBeInTheDocument();
});
