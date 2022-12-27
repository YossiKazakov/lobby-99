// this is the actual page for each lobby member
import { MEMBERS_TABLE_NAME } from "../config";
import { client } from "../database";
import Member from "../components/member";

const MemberDetails = ({ member }) => {
  console.log({ member });
  return (
    <Member member = {member} />
  );
};

export const getStaticPaths = async () => {
  const { data: members } = await client.from(MEMBERS_TABLE_NAME).select("id");
  const paths = members.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: member } = await client.from(MEMBERS_TABLE_NAME)
    .select("*")
    .eq("id", id)
    .single();

  return {
    props: {
      member,
    },
  };
};

export default MemberDetails;