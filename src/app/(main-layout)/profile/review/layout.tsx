import { Button } from "@/Components/Buttons";
import ReviewCustomLink from "./_components/reviewCustomLink";
import { fetchData } from "@/actions/fetchData";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `My Reviews | ${shopInfo?.data?.shopName}`,
      description: `Check and manage your product reviews at ${shopInfo?.data?.shopName}. Share your feedback and help others make informed purchase decisions.`,
    };
  } catch (error) {
    return {
      title: "My Reviews",
      description:
        "Check and manage your product reviews. Share your feedback and help others make informed purchase decisions.",
    };
  }
}

const ReviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex gap-4 items-center justify-start mb-5">
        <ReviewCustomLink path="/profile/review">
          <Button className="px-5 py-2 rounded-full border border-black-10">
            To Review
          </Button>
        </ReviewCustomLink>
        <ReviewCustomLink path="/profile/review/all-review-history">
          <Button className="px-5 py-2 rounded-full border border-black-10">
            Review History
          </Button>
        </ReviewCustomLink>
      </div>

      {children}
    </div>
  );
};

export default ReviewLayout;
