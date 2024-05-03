
import Image from "next/image";
import MyNavbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-white" style={{ position: 'relative' }}>
      <MyNavbar />
      <div className="mb-2" style={{ position: 'relative' }}>
        <Image
          src="/images/snc-products-3.jpg"
          alt="Description of your image"
          width={500}
          height={300}
          layout="responsive"
        />
        <div style={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.6)',
          padding: '10px',
          borderRadius: '5px'
        }}>
          SNC Supplement are a range of products designed to help you achieve your fitness goals, whether you want to build muscle,lose fat, improve performance or boost your immune system.
        </div>
      </div>
      <div className="mb-2" style={{ position: 'relative' }}>
        <Image
          src="/images/snc-products-3.jpg"
          alt="Description of your image"
          width={500}
          height={300}
          layout="responsive"
        />
        <div style={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.6)',
          padding: '10px',
          borderRadius: '5px'
        }}>
          SNC Supplement are a range of products designed to help you achieve your fitness goals, whether you want to build muscle,lose fat, improve performance or boost your immune system.
        </div>
      </div>
      <div className="mb-2" style={{ position: 'relative' }}>
        <Image
          src="/images/snc-products-3.jpg"
          alt="Description of your image"
          width={500}
          height={300}
          layout="responsive"
        />
        <div style={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.6)',
          padding: '10px',
          borderRadius: '5px'
        }}>
          SNC Supplement are a range of products designed to help you achieve your fitness goals, whether you want to build muscle,lose fat, improve performance or boost your immune system.
        </div>
      </div>
      <div className="mb-2" style={{ position: 'relative' }}>
        <Image
          src="/images/snc-products-3.jpg"
          alt="Description of your image"
          width={500}
          height={300}
          layout="responsive"
        />
        <div style={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.6)',
          padding: '10px',
          borderRadius: '5px'
        }}>
          SNC Supplement are a range of products designed to help you achieve your fitness goals, whether you want to build muscle,lose fat, improve performance or boost your immune system.
        </div>
      </div>
    </div>
  );
}
