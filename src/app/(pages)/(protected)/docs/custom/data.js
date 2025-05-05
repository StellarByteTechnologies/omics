// images
import photo1 from '@/assets/images/photos/4.jpg';
import avatar1 from '@/assets/images/avatars/img-4.jpg';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import avatar3 from '@/assets/images/avatars/img-7.jpg';
import img1 from '@/assets/images/photos/1.jpg';
import img2 from '@/assets/images/photos/2.jpg';
import img3 from '@/assets/images/photos/3.jpg';
import img4 from '@/assets/images/photos/4.jpg';
import img5 from '@/assets/images/photos/5.jpg';
import img6 from '@/assets/images/photos/6.jpg';
const post = [{
  image: photo1,
  tag: {
    variant: 'success',
    value: 'Travel'
  },
  overlay: 'dark',
  title: 'Top 10 must visit best beaches of Goa',
  groupAvatars: [avatar3, avatar1, avatar2],
  description: 'Goa and its beaches do not need an introduction! The state is well known for its spectacular beaches and it is very difficult',
  postedBy: {
    name: 'John Deo',
    avatar: avatar1
  },
  postedOn: {
    date: '11 March, 2020',
    time: '02 am'
  }
}];
const gallery = [{
  id: 1,
  image: img1
}, {
  id: 2,
  image: img2
}, {
  id: 3,
  image: img3
}, {
  id: 4,
  image: img4
}, {
  id: 5,
  image: img5
}, {
  id: 6,
  image: img6
}];
export { post, gallery };