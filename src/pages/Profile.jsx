import BannerImage from "../assets/profileBanner.png";
import QPayBanner from "../components/common/QPayBanner";
import ProfileCard from "../components/profile/ProfileCard";
import Services from "../components/profile/Services";

import {
  Box
} from "@mui/material";

import {
  AccountBalance as AccountBalanceIcon,
  ShoppingCart as ShoppingCartIcon,
  VerifiedUser as VerifiedUserIcon,
  Work as WorkIcon
} from "@mui/icons-material";

import Language from "../assets/language.png";
import POS from "../assets/pos.png";
import Settings from "../assets/settings.png";
import SmartSpeakers from "../assets/smartSpeakers.png";
import User from "../assets/users.png";

const Profile = () => {
  const cards = [
    {
      icon: <AccountBalanceIcon />,
      title: "XXXX 9820",
      subtitle: "ICICI Bank | Chennai Egmore Branch",
    },
    {
      icon: <WorkIcon />,
      title: "Business Profile",
      subtitle: "View and edit your business details",
    },
    {
      icon: <VerifiedUserIcon />,
      title: "KYC Verification",
      subtitle: "Unlock exclusive benefits with KYC",
    },
    {
      icon: <ShoppingCartIcon />,
      title: "Order QR",
      subtitle: "Get paid, manage & order QRs",
    },
  ];

  const serviceData = [
    {
      title: "Smart Speaker",
      image: SmartSpeakers,
    },
    {
      title: "POS Machine",
      image: POS,
    },
  ];

  const businessData = [
    {
      title: "Payment Settings",
      image: Settings,
    },
    {
      title: "Manage Staff",
      image: User,
    },
    {
      title: "Change Language",
      image: Language,
    },
  ];

  return (
    <div>
      <QPayBanner
        image={BannerImage}
        imageHeight={{ sm: 180, md: 180 }}
        title="Pay ₹1/month* for the QPay POS Device"
        subtitle="One device for accepting all modes of payments"
        buttonLabel="Download App Now!"
        onButtonClick={() => console.log("Button clicked!")}
      />

      {/* Single Grid Container */}
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          mt: 2,
        }}
      >
        {cards.map((card, index) => (
          <ProfileCard key={index} {...card} />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 2,
        }}
      >
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 48%" }, // full width on mobile, ~50% on sm+
          }}
        >
          <Services data={serviceData} title="Business Services" />
        </Box>
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 48%" }, // full width on mobile, ~50% on sm+
          }}
        >
          <Services data={businessData} title="Manage Business" />
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
