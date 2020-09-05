import anime from 'animejs';

const arrow = ({ target, isOpen }) => {
  anime({
    targets: target,
    rotate: isOpen ? '0' : '-180',
    duration: 1000,
  });
}

export default arrow;