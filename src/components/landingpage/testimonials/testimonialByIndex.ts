interface Testimonial {
  headerQuote: string;
  testimonialText: string;
  avatarImage: string;
  reviewerName: string;
}

export const testimonials: Testimonial[] = [
  {
    headerQuote: 'Best service ever',
    testimonialText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    avatarImage: '/avatar1.jpeg',
    reviewerName: 'John Doe',
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
