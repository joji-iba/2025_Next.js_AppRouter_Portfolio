import Head from 'next/head';
import Image from 'next/image';
import { Layout } from 'components/Layout';
import { motion } from 'framer-motion';

// スキルのアニメーション実装
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const skills = () => {
  return (
    <>
      <Head>
        <title>Joji Iba | Skills Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <h2 className="font-bold text-8xl w-full text-center">Skills</h2>
          <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
            <motion.div
              className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Web
            </motion.div>
            <Skill name="HTML" x="-22vw" y="2vw" />
            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="Sass" x="15vw" y="-12vw" />
            <Skill name="jQuery" x="-25vw" y="14vw" />
            <Skill name="JavaScript" x="15vw" y="-4vw" />
            <Skill name="TypeScript" x="-30vw" y="-5vw" />
            <Skill name="PHP" x="0vw" y="12vw" />
            <Skill name="WordPress" x="32vw" y="-5vw" />
            <Skill name="ReactJS" x="0vw" y="-20vw" />
            <Skill name="NextJS" x="-20vw" y="-15vw" />
            <Skill name="Tailwind CSS" x="18vw" y="18vw" />
            <Skill name="AWS" x="-10vw" y="18vw" />
            <Skill name="Illustrator/Photoshop" x="25vw" y="6vw" />
            <Skill name="SEO" x="3vw" y="20vw" />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default skills;
