import { PromptCard } from "@/components/prompt";
import { fetchPrompts } from "@/actions/prompt";
import type { Prompt } from "@/types/prompt";

export async function Feed() {
  const prompts = await fetchPrompts();

  // const [searchText, setSearchText] = useState("");
  // const [searchTimeout, setSearchTimeout] = useState(null);
  // const [searchedResults, setSearchedResults] = useState([]);

  // const filterPrompts = (searchtext: string) => {
  //   const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
  //   return posts.filter(
  //     (item) => regex.test(item?.creator?.username) || regex.test(item?.tag)
  //     // ||
  //     // regex.test(item?.prompt)
  //   );
  // };

  // const handleSearchChange = (e) => {
  //   clearTimeout(searchTimeout);
  //   setSearchText(e.target.value);

  //   // debounce method
  //   setSearchTimeout(
  //     setTimeout(() => {
  //       const searchResult = filterPrompts(e.target.value);
  //       setSearchedResults(searchResult);
  //     }, 500)
  //   );
  // };

  // const handleTagClick = (tag: string) => {
  //   setSearchText(tag);

  //   const searchResult = filterPrompts(tag);
  //   setSearchedResults(searchResult);
  // };

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch("/api/prompt");
  //     const data = await res.json();
  //     setPosts(data);
  //   };

  //   fetchPosts();
  // }, []);

  if (!prompts.length) return <h1 className="my-24">No prompts to load.</h1>;

  return (
    <section className="feed">
      {/* <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form> */}

      {/* All Prompts */}
      <div className="mt-16 prompt_layout">
        {prompts?.map((prompt) => (
          <PromptCard prompt={prompt as Prompt} key={prompt.id} />
        ))}
      </div>

      {/* {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )} */}
    </section>
  );
}
