import Image from "next/image";
import hero from '../../assets/hero.jpg';
export const metadata = {
  title: 'about ',
  description: '...',
}

const AboutPage = () => {
    return (
        <div className="flex justify-center">
            <div className="relative">
                <Image width={1400} height={150} src='/banner.png' alt='banner image'></Image>
                <div className="absolute top-50 left-[35%]">
                    <Image width={300} height={300} src={hero} alt="hero" className="rounded-full"></Image>
                </div>
                <Image width={500} height={500} src={'https://images.unsplash.com/photo-1761839258044-e59f324b5a7f'} alt='mobile'></Image>
            </div>
        </div>
    );
};

export default AboutPage;