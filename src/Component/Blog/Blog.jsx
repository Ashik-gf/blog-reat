
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover_photos, author, read_time, hashtag,update_time}=blog;
    return (
        <div className=' bg-slate-400  block mx-auto'>
            <div>
             <img className='w-full mx-auto p-2 h-[450px] rounded-lg' src={cover_photos}></img>
            <h2 className='m-2 p-2 text-center text-3xl'>Title:{title}</h2>
            </div>
            
        <div className='mx-4 flex ml-4'>
        <img className='h-8 w-8 rounded-xl' 
        src={author.profile_picture}></img>
        <div>
        <div className='flex justify-between mx-2 w-full bg-red-600'>
    <p className='text-xl p-1'>{author.name}</p> 
    <div className='flex justify-evenly'>  
        <p>{read_time}</p> 
        <button>BookMark</button>
     </div> 
    
    </div>
           
           <p className='text-sm '> {update_time}</p>
           <span className='text-red-900 my-1'>#{hashtag}</span>
        </div>
       
        
        </div>
        </div>
       
    );
};

export default Blog;
Blog.propTypes ={
    blog: PropTypes.object.isRequired
}