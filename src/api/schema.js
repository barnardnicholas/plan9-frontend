const postSchema = {
  post_id: "",
  post_timestamp: 0,
  post_status: "",
  post_image: "",
  post_screengrab: true,
  post_uploaded_image: true,
  post_sent_tweet: true,
  post_date: "",
};

const dbSchema = {
  state: {
    is_playing: false,

  },
  posts: [],
  backend_logs: [],
  uptime_logs: []
}

module.exports = { postSchema };
