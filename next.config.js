/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY:
      "AIzaSyC_anNIk3aPsyNhPQM_fLqQ1yoEKjlSGk0",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "jobie-farm.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "jobie-farm",
    NEXT_PUBLIC_PAYSTACK_TEST_SECRET_KEY:
      "sk_test_317058cfe217cffc6eea0513cecdc16a8a6fcbfd",
    NEXT_PUBLIC_PAYSTACK_TEXT_PUBLIC_KEY:
      "pk_test_3c05acae869f6af01fef3db9bfb2f074b69fea39",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

module.exports = nextConfig;
