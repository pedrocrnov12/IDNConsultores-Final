import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './OptionCard.module.css';
import { Link } from 'react-scroll';

interface OptionCardProps {
  image: string;
  title: string;
  sectionId: string;
}

const OptionCard: React.FC<OptionCardProps> = ({ image, title, sectionId }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const animationProps = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <animated.div
      className={styles.optionCard}
      style={animationProps}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={sectionId} smooth={true} duration={500}>
        <div className={styles.optionImageWrapper}>
          <img src={image} alt={title} className={styles.optionImage} />
          <div className={styles.optionText}>{title}</div>
        </div>
      </Link>
    </animated.div>
  );
};

export default OptionCard;
