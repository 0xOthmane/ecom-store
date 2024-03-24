import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/molecules/ProductList";
import Billboard from "@/components/organisms/Billboard";
import Container from "@/components/organisms/Container";

const HomePage = async () => {
  const billboard = await getBillboard("");
  const products = await getProducts({ isFeatured: true });
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured products" items={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
