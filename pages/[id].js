// here we are reading the members data from the database and allocating a page for each member

import { MEMBERS_TABLE_NAME } from "../config";
import { client } from "../database";
import Member from "../components/member";

const MemberDetails = ({ member }) => {
  return (
    <Member member={member} />
  );
};

export const getStaticPaths = async () => {
  // ****** default in case having troubles reading from the supabase, for offline presentation purpose
  let paths = [{params: {id: '1'}},];
  // ******
  const { data } = await client.from(MEMBERS_TABLE_NAME).select("id");
  if (data != null) {
    paths = data.map(({ id }) => ({
      params: {
        id: id.toString(),
      },
    }));
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  // ****** default in case having troubles reading from the supabase, for offline presentation purpose
  let member = {'id': 1, 'join_at': '2020-01-01T14:25:00', 'email': 'ok@gmail.com', 'name': 'עמית', 'last_vote': true, 'num_votes': 4};
  // ******
  const { data } = await client.from(MEMBERS_TABLE_NAME)
    .select("*")
    .eq("id", id)
    .single();
  if (data != null) {
    member = data;
  }
  return {
    props: {
      member
    },
  };
};

export default MemberDetails;