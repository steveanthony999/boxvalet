interface Testimonial {
  headerQuote: string;
  testimonialText: string;
  avatarImage: string;
  reviewerName: string;
}

export const testimonials: Testimonial[] = [
  {
    headerQuote: 'The customer service is A+',
    testimonialText:
      'It’s so nice not having to rent a whole unit for a few boxes. They just left me the boxes I needed, then picked them up when I was ready.  I have had them deliver a couple of times already and delivery is just as promised along with being in the same condition when it originally left.  The customer service is A+ and ready to help.  They make sure you know what’s in each box with a detailed packing list and label so I can easily request the box I want.  Payments are easy.  It’s all about convenience for me.  I recommend Box Valet, it’s a service like no other!',
    avatarImage: '/avatar1.jpeg',
    reviewerName: 'Cole Kent',
  },
  {
    headerQuote: 'Highly recommended',
    testimonialText: 'Pellentesque in ipsum id orci porta dapibus...',
    avatarImage: '/avatar2.jpeg',
    reviewerName: 'Jane Smith',
  },
  {
    headerQuote: 'Will use again',
    testimonialText:
      'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...',
    avatarImage: '/avatar3.jpeg',
    reviewerName: 'Emily Johnson',
  },
  {
    headerQuote: 'Exceptional quality',
    testimonialText: 'Sed porttitor lectus nibh...',
    avatarImage: '/avatar4.jpeg',
    reviewerName: 'Michael Brown',
  },
];

const testimonialByIndex = (index: number): Testimonial =>
  testimonials[index % testimonials.length];

export default testimonialByIndex;
