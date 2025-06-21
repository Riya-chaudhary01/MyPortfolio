import { SectionWrapper } from '../hoc';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { myProfiles } from '../constants';

const ProfileCard = ({ index, title, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="green-pink-gradient p-[1px] rounded-[20px]"
    >
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-[calc(100vw-60px)] max-w-[360px]"
      >
        <div className="relative w-full h-[230px] cursor-pointer">
          <img
            src={image}
            alt={`profile_image`}
            className="w-full h-full object-cover rounded-2xl"
            onClick={() => window.open(source_code_link, "_blank")}
          />
        </div>
        <div className="mt-5 text-center">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Profile = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-secondary`}>
          PROFILES
        </h2>
      </motion.div>

      <div className="absolute top-10 right-5">
        <img
          src="/assets/Profile_img.png"
          alt="Profile-img"
          className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      <div className="mt-40 flex flex-wrap gap-7">
        {myProfiles.map((profile, index) => (
          <ProfileCard key={`profile-${index}`} index={index} {...profile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Profile, "Profile");
