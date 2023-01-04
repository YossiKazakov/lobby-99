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
  const paths = [ // ***** default in case having troubles reading from the supabase
    {
      params: {
        id: '1'
      }
    },
  ];



  const { data } = await client.from(MEMBERS_TABLE_NAME).select("id");
  if (data != null){
    paths = data.map(({ id }) => ({
      params: {
        id: id.toString(),
      },
    }));
  }
  console.log(paths)
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => { // Maybe hash the id
  const member = {'id': 1, 'name': 'עמית'}; // ****** default in case having troubles reading from the supabase  

  const { data } = await client.from(MEMBERS_TABLE_NAME)
    .select("*")
    .eq("id", id)
    .single();
  if(data != null){
    member = data;
  }
  return {
    props: {
      member,
    },
  };
};

export default MemberDetails;