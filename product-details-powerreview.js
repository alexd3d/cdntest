
    window.POWERREVIEWS = (function (publicScope) {
        console.log('POWERREVIEWS LOADED FROM CDN!')
        publicScope.ext = publicScope.ext || {};
        publicScope.ext.evaluate = function (arg) {
            return eval(arg);
        };
        return publicScope;
    })(window.POWERREVIEWS || {});

    window.POWERREVIEWS = (function (E) {
        E.common = E.common || {};
        E.display = E.display || {};
        E.config = E.config || {};
        var Bq = false;
        var CI = false;
        var p = null;
        var K = null;
        var o = {};
        var L = {};
        var AI = {};
        var Bw = {};
        E.common.gResult = Bw;
        var c = {};
        var Bh = {};
        var U;
        var CU = 0;
        var BM = [];
        var BG = encodeURIComponent || escape;
        var A2 = "prBaseStylesheet";
        var BB = "prMerchantOverrideStylesheet";
        var BN = {
            "0": {large: "pr-stars-0", small: "pr-stars-0-sm"},
            "1": {large: "pr-stars-1", small: "pr-stars-1-sm"},
            "1.5": {large: "pr-stars-1_5", small: "pr-stars-1_5-sm"},
            "2": {large: "pr-stars-2", small: "pr-stars-2-sm"},
            "2.5": {large: "pr-stars-2_5", small: "pr-stars-2_5-sm"},
            "3": {large: "pr-stars-3", small: "pr-stars-3-sm"},
            "3.5": {large: "pr-stars-3_5", small: "pr-stars-3_5-sm"},
            "4": {large: "pr-stars-4", small: "pr-stars-4-sm"},
            "4.5": {large: "pr-stars-4_5", small: "pr-stars-4_5-sm"},
            "5": {large: "pr-stars-5", small: "pr-stars-5-sm"}
        };
        var Y = {};

        function Aj() {
            return {"en_US": {"en_US": "US English"}};
        }

        E.common.getLocaleTranslations = Aj;
        var BA = Aj();
        var As = {
            pr_merchant_table: {
                "m813109": {"name": "Paulas Choice", "cobranded": "true"},
                "siteId-1": {"name": "Paulas Choice", "cobranded": "true"}
            },
            pr_merchant_id: 813109,
            pr_merchant_name: "Paulas Choice",
            pr_site_id: null,
            pr_merchant_group_id: 17731,
            pr_locale: "en_US",
            pr_all_locales: ["en_US"],
            pr_all_locales_hash: {"en_US": true},
            pr_locale_transitions: {},
            pr_read_review: "#ReviewHeader",
            pr_read_qa: "#QAHeader",
            pr_write_review: "",
            pr_ask_question: "",
            pr_answer_question: "",
            pr_js_controller_url: "https://services.powerreviews.com/JSController.do",
            pr_reviews_per_page: 10,
            pr_questions_per_page: 10,
            pr_zip_location: "/_resources/www/paulaschoice/_system/",
            pr_powerreviews_root: "pwr",
            pr_review_display_usage_tracker_path: "https://cdn.powerreviews.com/aux/",
            pr_allow_engine_css_override: true,
            pr_style_sheet: "",
            pr_analytics_script_src: "",
            pr_analytics_account: "",
            pr_badge_definitions_url: "javascript:POWERREVIEWS.common.showSmallPopup('http://www.powerreviews.com/legal/badge_definitions_~~~LOCALE~~~.html', 580, 460)",
            pr_expert_badge_definitions_url: "javascript:POWERREVIEWS.common.showSmallPopup('http://www.powerreviews.com/legal/expert_badge_definitions_~~~LOCALE~~~.html', 580, 460)",
            pr_frame_height: 3000,
            pr_base_services_urls: {"-": "https://services.powerreviews.com/"},
            pr_base_follow_landing_urls: {"-": "https://social.powerreviews.com"},
            pr_resize_url: "",
            pr_mobile_write_a_review_html_url: "/_resources/www/paulaschoice/_system/pwr/engine/js/writeReview.html",
            pr_snippet_min_reviews: 0,
            pr_suppress_google_plus_one: false,
            pr_source: "web",
            pr_image_snippet_show_image: B2,
            pr_image_snippet_max: 7,
            pr_snippet_star_click: "",
            pr_back_to_top_link: "#",
            pr_see_all_reviews_url: "",
            pr_nbr_displayed_profile_reviews: -1,
            pr_overwrite_inline_content: false,
            pr_badge_table: {
                "11024": {
                    "locales": {
                        "en_CA": {
                            "hovertext": "",
                            "description": "",
                            "filename": "badge_se_en_CA.gif"
                        },
                        "en_GB": {
                            "hovertext": "Staff Reviewer",
                            "description": "A Staff Expert is a merchant or brand employee with recognized expertise within the company who contributes a review based on in-depth knowledge of the product as well as related products.",
                            "filename": "badge_se_en_GB.gif"
                        },
                        "pt_BR": {"hovertext": "", "description": "", "filename": "badge_se_pt_BR.gif"},
                        "en_US": {
                            "hovertext": "Staff Reviewer",
                            "description": "A Staff Expert is a merchant or brand employee with recognized expertise within the company who contributes a review based on in-depth knowledge of the product as well as related products.",
                            "filename": "badge_se_en_US.gif"
                        },
                        "de_DE": {
                            "hovertext": "Mitarbeiter-Bewerter",
                            "description": "",
                            "filename": "badge_se_de_DE.gif"
                        },
                        "it_IT": {"hovertext": "", "description": "", "filename": "badge_se_it_IT.gif"},
                        "fr_CA": {"hovertext": "", "description": "", "filename": "badge_se_fr_CA.gif"},
                        "jp_JP": {"hovertext": "", "description": "", "filename": "badge_se_jp_JP.gif"},
                        "fr_FR": {"hovertext": "", "description": "", "filename": "badge_se_fr_FR.gif"}
                    }, "label": "staff-expert", "isStaff": true
                },
                "11023": {
                    "locales": {
                        "en_CA": {
                            "hovertext": "Staff Reviewer",
                            "description": "A Staff Reviewer is a merchant or brand employee who contributes a review based on ownership or usage of the product.",
                            "filename": "badge_sr_en_CA.gif"
                        },
                        "en_GB": {
                            "hovertext": "Staff Reviewer",
                            "description": "A Staff Reviewer is a merchant or brand employee who contributes a review based on ownership or usage of the product.",
                            "filename": "badge_sr_en_GB.gif"
                        },
                        "en_US": {
                            "hovertext": "Staff Reviewer",
                            "description": "A Staff Reviewer is a merchant or brand employee who contributes a review based on ownership or usage of the product.",
                            "filename": "badge_sr_en_US.gif"
                        },
                        "de_DE": {
                            "hovertext": "Mitarbeiter-Bewerter",
                            "description": "",
                            "filename": "badge_sr_de_DE.gif"
                        },
                        "fr_CA": {
                            "hovertext": "Critique de personnel",
                            "description": "",
                            "filename": "badge_sr_fr_CA.gif"
                        },
                        "jp_JP": {"hovertext": "", "description": "", "filename": "badge_sr_jp_JP.gif"},
                        "fr_FR": {"hovertext": "", "description": "", "filename": "badge_sr_fr_FR.gif"},
                        "en_AU": {
                            "hovertext": "Staff Reviewer",
                            "description": "A Staff Reviewer is a merchant or brand employee who contributes a review based on ownership or usage of the product.",
                            "filename": "badge_sr_en_AU.gif"
                        },
                        "nl_NL": {
                            "hovertext": "Staff Beoordeler",
                            "description": "A Staff Beoordeler is een handelaar of merk werknemer die beoordelingen inzend op basis van eigendom of gebruik van het product.",
                            "filename": "badge_sr_nl_NL.gif"
                        }
                    }, "label": "staff", "isStaff": true
                }
            },
            pr_attribution_table: {},
            pr_tracking_domain: "",
            pr_widget_url: "//static.powerreviews.com/widgets/v1/widget.js",
            pr_widget_data_url_override: "",
            pr_mwar_enabled: "false",
            pr_api_write_base_url: "https://services.powerreviews.com/api",
            pr_ui_library_base_url: "//ui.powerreviews.com/stable",
            pr_environment: "prod",
            pr_waq_waa_style: "LEGACY",
            pr_war_server_path: "3.0",
            pr_war_fullscreen_enabled: "NONE",
            pr_review_display_split_testing_enabled: "false",
            pr_hosted_display_engine_enabled: false,
            pr_style_sheet_override_url: false,
            pr_force_email_collection: "EMAIL_OPTIONAL",
            pr_integrated_profile_display_enabled: true,
            pr_bv_peekaboo_enabled: false,
            pr_review_display_style: "LEGACY_RESPONSIVE",
            pr_is_self_service: false,
            pr_track_review_display_usage: false,
            pr_base_url_group_key: "-",
            pr_pollute_window: false,
            pr_short_month_names: {"en_US": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]},
            pr_long_month_names: {"en_US": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""]},
            pr_short_day_names: {"en_US": ["", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]},
            pr_long_day_names: {"en_US": ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]},
            pr_am_pm_names: {"en_US": ["AM", "PM"]},
            pr_engine_base_version: "2",
            pr_fb_like_in_snippet_enabled: false,
            pr_google_plus1_in_snippet_enabled: false,
            pr_pinterest_in_snippet_enabled: false,
            pr_social_measurement_enabled: true,
            pr_reviews_enabled: true,
            pr_answers_enabled: false,
            pr_image_snippet_enabled: false,
            pr_teaser_enabled: false,
            pr_omniture_enabled: false,
            pr_beacon_delay_enabled: false,
            pr_tracking_pixel_url: "//t.powerreviews.com/t/v1.gif",
            pr_social_measurement_engine_version: "2",
            pr_non_word_replacement: "__",
            pr_review_display_default_sort_order: "Newest",
            pr_is_master_merchant: false,
            pr_use_https_wrapper: false,
            pr_is_inline_seo: true,
            pr_is_microdata_schemaorg: false,
            pr_is_microdata_schemaorg_product: true,
            pr_responsive_answers_enabled: false,
            pr_follow_channels: "All",
            pr_structured_data_type: "false",
            pr_enable_facebook_get_advice: false,
            pr_enable_facebook_follow_product_category: false,
            pr_enable_facebook_follow_profile: false,
            pr_enable_facebook_follow_product: false,
            pr_face_off_enabled: false,
            pr_enable_ask_a_reviewer: false,
            pr_enable_profiles: true,
            pr_is_attribution_url_disabled: false,
            pr_is_facebook_verify_enabled: false,
            pr_services_hide_verify_box: false,
            pr_social_loyalty_point_value_map: {},
            pr_creation_date: "2017-08-07 05:26:00.803",
            pr_simplified_zip: false,
            pr_snippet_style: "LEGACY"
        };
        var Ci = {
            pr_review_display_date_pattern: "{0,date,M/d/yyyy}",
            pr_gas_snapshot_reviewed_by_with_filters: "Filtered to show {0} of {1} reviews",
            pr_gas_error_thanks_for_feedback: "Thank you for your feedback.  Please note that only your first vote will be counted.",
            pr_services_review_display_thanks_for_feedback: "Thank you for your feedback.  Please note that only your first vote will be counted.",
            pr_gas_error_only_one_vote_per_review: "You may only submit one vote per review.",
            pr_services_review_display_only_one_vote_per_review: "You may only submit one vote per review.",
            pr_gas_error_already_notified: "You have already notified us of an error for this review.",
            pr_services_review_display_already_notf_err: "You have already notified us of an error for this review.",
            pr_gas_error_required_email: "Email Address is required when flagging a review",
            pr_gas_error_required_flag_issue: "Please select the reason you are flagging this review",
            pr_gas_error_thanks_for_notification: "Thank you for notifying us of this error.",
            pr_services_review_display_thanks_for_notf_err: "Thank you for notifying us of this error.",
            pr_gas_modal_follow_emailaddress_prompt_prepopulate: "Enter email address",
            pr_gas_snippet_no_reviews: "(No reviews)",
            pr_gas_snippet_review_count: "(1 review)",
            pr_gas_snippet_reviews_count: "({0} reviews)",
            pr_gas_snippet_read_review: "Read <span>1</span> Review",
            pr_gas_snippet_read_reviews: "Read <span>{0}</span> Reviews",
            pr_gas_snippet_write_review: "Write a Review",
            pr_gas_snippet_be_the_first: "Be the first to",
            pr_gas_star_message_0: "Got it? Rate it.",
            pr_gas_star_message_1: "Not good",
            pr_gas_star_message_2: "Needs that special something",
            pr_gas_star_message_3: "Average, ordinary",
            pr_gas_star_message_4: "That's good stuff",
            pr_gas_star_message_5: "Perfect. It doesn't get any better",
            pr_gas_snapshot_describeyourself: "Reviewer Profile",
            pr_gas_snapshot_based_on_singular: "based on {0} review",
            pr_gas_snapshot_based_on_plural: "based on {0} reviews",
            pr_social_loyalty_get_advice_prompt_points: "+100",
            pr_gas_social_loyalty_get_advice_prompt_text: "Earn points simply by sharing with your friends!",
            pr_gas_facebook_get_advice_label: "Need more help?",
            pr_gas_facebook_get_advice_link: "Get advice from friends &#0155;",
            pr_gas_facebook_follow_product_category_label: "Like this category?",
            pr_gas_facebook_follow_product_category_link: "Follow trending products",
            pr_gas_snapshot_title: "REVIEW SNAPSHOT&reg;",
            pr_gas_snapshot_by_powerreviews_express_link: "https://www.powerreviews.com/legal/index_prx_en_US.html",
            pr_gas_snapshot_by_powerreviews_express: "by PowerReviews",
            pr_gas_snapshot_by_powerreviews_link: "https://www.powerreviews.com/legal/index_en_US.html",
            pr_gas_snapshot_by_powerreviews: "by PowerReviews",
            pr_gas_snapshot_switch_locale: "Show {0} {1} review",
            pr_gas_snapshot_switch_locale_plural: "Show {0} {1} reviews",
            pr_gas_snapshot_consensus: "of respondents would recommend this to a friend.",
            pr_gas_snapshot_histogram_rating_distribution: "Ratings Distribution",
            pr_gas_snapshot_pros: "Pros",
            pr_gas_snapshot_cons: "Cons",
            pr_gas_no: "No",
            pr_gas_cons: "Cons",
            pr_gas_snapshot_bestuses: "Best Uses",
            pr_gas_snapshot_social_loyalty_review_prompt: "Share your opinion, earn points",
            pr_gas_snapshot_be_the_first: "Not yet rated. Be the first to",
            pr_gas_snapshot_write_a_review: "Write a Review",
            pr_gas_snapshot_social_loyalty_first_review_prompt: "(earn bonus points)",
            pr_gas_facebook_subscribe_to_reviews_label: "Subscribe to Reviews",
            pr_gas_snapshot_face_off_positive: "Most Liked Positive Review",
            pr_gas_snapshot_face_off_read_full_review: "Read complete review",
            pr_gas_snapshot_face_off_versus: "VS",
            pr_gas_snapshot_face_off_negative: "Most Liked Negative Review",
            pr_gas_snapshot_reviews_label: "REVIEWS",
            pr_gas_snapshot_reviewed_by_singular: "Reviewed by 1 customer",
            pr_gas_snapshot_reviewed_by_plural: "Reviewed by {0} customers",
            pr_gas_snapshot_sort_by_label: "Sort by",
            pr_gas_snapshot_sort_by_new: "Newest",
            pr_gas_snapshot_sort_by_old: "Oldest",
            pr_gas_snapshot_sort_by_rate_high: "Highest rating",
            pr_gas_snapshot_sort_by_rate_low: "Lowest rating",
            pr_gas_snapshot_sort_by_helpf_high: "Most helpful",
            pr_gas_snapshot_sort_by_helpf_low: "Least helpful",
            pr_gas_bottomline_Yes: "Yes, I would recommend this to a friend",
            pr_gas_bottomline_No: "No, I would not recommend this to a friend",
            pr_gas_displaying_review: "Displaying review",
            pr_gas_displaying_reviews: "Displaying reviews",
            pr_gas_back_to_top: "Back to top",
            pr_gas_previous: "Previous",
            pr_gas_next: "Next",
            pr_gas_helpful_ratio: "{0} of {1}",
            pr_gas_found_helpful: "customers found this review helpful",
            pr_gas_by: "By",
            pr_gas_from: "from",
            pr_gas_describeyourself: "About Me",
            pr_gas_profile_see_all_my_reviews: "See all my reviews",
            pr_gas_reviews_ask_me_a_question_link: "Ask me a question",
            pr_gas_facebook_follow_me_link: "Follow me",
            pr_gas_verified_buyer: "Verified Buyer",
            pr_gas_site_member: "Site Member",
            pr_gas_verified_reviewer: "Verified Reviewer",
            pr_gas_pros: "Pros",
            pr_gas_bestuses: "Best Uses",
            pr_gas_comments_about: "Comments about <em>{0}</em>:",
            pr_gas_service_comments: "Service and delivery comments:",
            pr_gas_recommended_products: "Recommended",
            pr_gas_similar_products: "Similar",
            pr_gas_bottomline: "Bottom Line",
            pr_gas_images_shared_by: "Images shared by",
            pr_gas_video_shared_by: "Video shared by",
            pr_gas_images_video_shared_by: "Images shared by",
            pr_gas_image_thumbnail: "Image Thumbnail",
            pr_gas_video_thumbnail: "Video Thumbnail",
            pr_gas_media_tags_label: "Tags:",
            pr_gas_merchant_response: "Customer Service Response: ",
            pr_gas_attributes_reviewed_at: "REVIEWED AT",
            pr_gas_was_helpful: "Was this review helpful?",
            pr_gas_yes: "Yes",
            pr_gas_flag_review_before: "You may also",
            pr_gas_flag_review_after: "flag this review",
            pr_gas_reviews_facebook_comment: "Comment on this review",
            pr_facebook_comment_on_review: false,
            pr_gas_reviews_facebook_comment_instructions: "Click here to write a comment and share this review with your friends on Facebook. Your comment and this review will show up in your Facebook News Feed.",
            pr_gas_social_loyalty_facebook_comment_prompt: "(earn points)",
            pr_gas_footer_privacy_policy_link: "https://www.powerreviews.com/legal/privacy_policy_prx_en_US.html",
            pr_gas_footer_privacy_policy: "Privacy & Cookie Policy",
            pr_gas_snapshot_prx_link: "https://www.powerreviewsexpress.com/expressminisite/powerreviews_express.jsp?referrer={0}",
            pr_gas_snapshot_add_reviews_to_your_site: "Add Reviews to your site",
            pr_gas_snapshot_histogram_1_stars: "1 Stars",
            pr_gas_snapshot_histogram_2_stars: "2 Stars",
            pr_gas_snapshot_histogram_3_stars: "3 Stars",
            pr_gas_snapshot_histogram_4_stars: "4 Stars",
            pr_gas_snapshot_histogram_5_stars: "5 Stars",
            pr_gas_issue_header: "Please let us know what kind of issue this is:",
            pr_gas_issue_profanity: "Profanity",
            pr_gas_issue_wrong_product: "Wrong product",
            pr_gas_issue_spam: "Spam",
            pr_gas_issue_duplicate: "Duplicate",
            pr_gas_issue_copyright_violation: "Copyright violation",
            pr_gas_issue_not_review: "Not a product review",
            pr_gas_issue_customer_image: "Customer image",
            pr_gas_issue_problem_with_image: "Problem with image",
            pr_gas_issue_other: "Other",
            pr_gas_issue_email_address: "Email Address:",
            pr_gas_issue_email_subtext: "",
            pr_gas_issue_comments: "Comments:",
            pr_gas_submit: "Submit",
            pr_gas_cancel: "Cancel",
            pr_gas_facebook_follow_product_label: "Follow this Product",
            pr_gas_facebook_follow_product_instructions: "<b>Click the Like button</b> to follow on Facebook OR enter your email. Get the latest reviews for this product on your Facebook News Feed or by email. You can unsubscribe anytime.",
            pr_gas_facebook_follow_product_email_only_instructions: "Enter your email to get the latest reviews for this product. You can unsubscribe anytime.",
            pr_gas_facebook_follow_me_modal_facebook_messaging: "Follow on <span>Facebook</span>",
            pr_gas_facebook_follow_invalid_email_message: "Please enter a valid email address.",
            pr_gas_facebook_follow_submit_button_label: "SUBMIT",
            pr_gas_facebook_follow_me_modal_thank_you_message: "<span><b>Thank You.</b></span>You have successfully signed up to receive emails.",
            pr_gas_facebook_modal_follow_product_category_label: "",
            pr_gas_facebook_follow_category_instructions: "",
            pr_gas_facebook_follow_category_email_only_instructions: "",
            pr_services_question_display_header_question_prompt_intro: "Do you have questions about this product?",
            pr_gas_social_loyalty_answerbox_header_prompt: "(earn points for answers!)",
            pr_services_question_display_header_question_prompt_cta: "",
            pr_services_question_display_header_question_prompt: "Get answers from real customers and in-house experts with <span>AnswerBox</span>.",
            pr_services_question_display_question_count_singular: "1 Question",
            pr_services_question_display_question_count_plural: "Questions",
            pr_services_question_display_answer_count_singular: "1 Answer",
            pr_services_question_display_answer_count_plural: "Answers",
            pr_services_question_byline_prefix_ask: "Asked on",
            pr_services_question_by: "by",
            pr_services_question_anonymous: "Anonymous",
            pr_services_question_from: "from",
            pr_services_answer_question_notation: "Q:",
            pr_services_question_answer_prompt: "Know the answer?",
            pr_services_question_answer_link_label: "Answer this question",
            pr_services_question_answer_count_singular: "1 answer",
            pr_services_question_answer_count_plural: "answers",
            pr_gas_social_loyalty_answerbox_first_answer_prompt: "(earn bonus points)",
            pr_services_answer_byline_prefix_answer: "Answered on",
            pr_services_answer_by: "by",
            pr_services_answer_anonymous: "Anonymous",
            pr_services_answer_from: "from",
            pr_services_answer_purchaser_badge: "VERIFIED BUYER",
            pr_services_answer_merchant_badge: "CUSTOMER CARE",
            pr_services_answer_answer_notation: "A:",
            pr_gas_displaying_question: "Displaying question",
            pr_gas_displaying_questions: "Displaying questions",
            pr_services_question_display_ask_question_link_content: "Ask a question",
            pr_services_question_display_footer_question_prompt_intro: "Do you have a question about this product?",
            pr_gas_pa_snippet_title: "Q&A",
            pr_gas_pa_snippet_text: "Ask Questions, share answers",
            pr_gas_pa_snippet_question: "<span>1</span> Question",
            pr_gas_pa_snippet_questions: "<span>{0}</span> Questions",
            pr_gas_pa_snippet_answer: "<span>1</span> Answer",
            pr_gas_pa_snippet_answers: "<span>{0}</span> Answers",
            pr_gas_pa_snippet_ask_question: "Ask a Question",
            pr_gas_facebook_follow_me_modal_submit_error_header: "Sorry",
            pr_gas_facebook_follow_me_modal_submit_error_message: "We are having difficulties submitting your email right now. Please try again later.",
            pr_services_review_display_teaser_headline: "Customer reviews",
            pr_services_review_display_teaser_subheadline: "Showing most recent reviews",
            pr_services_review_display_image_snippet_header: "Customer Images",
            pr_gas_profile_histogram_rating_distribution: "Ratings Distribution",
            pr_gas_profile_facebook_manage_settings: "Is this you? Manage Settings",
            pr_gas_profile_my_reviews: "My Reviews",
            pr_gas_profile_n_most_recent_reviews: "{0} most recent reviews",
            pr_gas_facebook_modal_follow_me_label: "Follow this Reviewer",
            pr_gas_facebook_follow_location_preposition: "from",
            pr_gas_facebook_modal_follow_me_instructions: "<b>Click the Like button</b> to follow on Facebook OR enter your email. See the latest reviews this reviewer writes on your Facebook News Feed or by email. You can unsubscribe anytime.",
            pr_gas_facebook_modal_follow_me_email_only_instructions: "Enter your email to get the latest reviews this reviewer writes. You can unsubscribe anytime.",
            pr_avatar_image_url: "https://images.powerreviews.com/images/avatar-grey.gif",
            pr_gas_sweepstakes_message: "Submitted as part of a sweepstakes entry",
            pr_gas_sampling_message: "Reviewer received a free sample of this product",
            pr_qa_display_author_asked_by: "",
            pr_qa_display_relative_time_days_ago: "",
            pr_qa_display_relative_time_months_ago: "",
            pr_qa_display_relative_time_years_ago: ""
        };
        var CB = {};
        if (window && window.location && window.location.search) {
            var BI = window.location.search.substring(1).split("&");
            for (var CF = 0, BO = BI.length; CF < BO; ++CF) {
                var CC = BI[CF].split("=");
                CB[CC[0]] = CC[1];
            }
        }

        function BW(i) {
            var DQ = document.getElementsByTagName("head")[0];
            if (DQ && DQ.firstChild) {
                DQ.appendChild(i);
            } else {
                if (DQ) {
                    DQ.appendChild(i);
                } else {
                    window.document.children[0].appendChild(i);
                }
            }
        }

        function AN(DS) {
            for (var DT = 1, DR = arguments.length; DT < DR; ++DT) {
                var DU = arguments[DT];
                if (DU) {
                    var DQ = DU[DS];
                    if (typeof DQ != "undefined") {
                        return DQ;
                    }
                }
            }
            return null;
        }

        function M(DQ, i) {
            return AN(DQ, i, CB, window, As);
        }

        E.common.get = M;

        function BQ() {
            return As;
        }

        E.getDefaults = BQ;

        function DO() {
            return Ci;
        }

        E.getMessages = DO;

        function C6(DQ, i) {
            if (typeof POWERREVIEWS.getMessages()[DQ] === "object") {
                return POWERREVIEWS.getMessages()[DQ][i];
            } else {
                return POWERREVIEWS.getMessages()[DQ];
            }
        }

        E.msg = C6;
        if (typeof document !== "undefined" && !E.isAppLaunch && (CB.pr_enable_hosted_renderer === "1" || !!M("pr_hosted_display_engine_enabled"))) {
            function B2() {
            }

            function BQ() {
                return As;
            }

            E.getDefaults = BQ;

            function DO() {
                return Ci;
            }

            E.getMessages = DO;
            var Bj = [];

            function Cb() {
                return Bj;
            }

            E.getEventQueue = Cb;
            E.display = {};

            function Ay(DQ, i) {
                Bj.push({docRoot: DQ, params: i, methodName: "prData", methodParent: "display"});
            }

            E.display.prData = Ay;

            function CA(i) {
                BM.push(i);
            }

            E.display.registerCallback = CA;
            var B0 = 0;

            function CG(i, DR) {
                var DS = "pr-snippet-holder-" + ++B0;
                i.write('<div id="' + DS + '"></div>');
                var DQ = document.getElementById(DS);
                DQ.write = function (DT) {
                    DQ.innerHTML += DT;
                };
                Bj.push({docRoot: DQ, params: DR, methodName: "snippet", methodParent: "display"});
            }

            E.display.snippet = CG;
            var C = 0;

            function Bx(i, DR) {
                var DS = "pr-engine-holder-" + ++C;
                i.write('<div id="' + DS + '" ></div>');
                var DQ = document.getElementById(DS);
                DQ.write = function (DT) {
                    DQ.innerHTML += DT;
                };
                Bj.push({docRoot: DQ, params: DR, methodName: "engine", methodParent: "display"});
            }

            E.display.engine = Bx;
            var Cc = 0;

            function DL(i, DR) {
                var DS = "pr-product-answers-holder-" + ++Cc;
                i.write('<div id="' + DS + '"></div>');
                var DQ = document.getElementById(DS);
                DQ.write = function (DT) {
                    DQ.innerHTML += DT;
                };
                Bj.push({docRoot: DQ, params: DR, methodName: "productAnswers", methodParent: "display"});
            }

            E.display.productAnswers = DL;
            var Ag = 0;

            function CN(i, DR) {
                var DS = "pr-product-answers-snippet-holder-" + ++Ag;
                i.write('<div id="' + DS + '"></div>');
                var DQ = document.getElementById(DS);
                DQ.write = function (DT) {
                    DQ.innerHTML += DT;
                };
                Bj.push({docRoot: DQ, params: DR, methodName: "productAnswersSnippet", methodParent: "display"});
            }

            E.display.productAnswersSnippet = CN;
            var BX = 0;

            function DH(i, DR) {
                var DS = "pr-teaser-review-holder-" + ++BX;
                i.write('<div id="' + DS + '"></div>');
                var DQ = document.getElementById(DS);
                DQ.write = function (DT) {
                    DQ.innerHTML += DT;
                };
                Bj.push({docRoot: DQ, params: DR, methodName: "teaserReview", methodParent: "display"});
            }

            E.display.teaserReview = DH;
            var Be = 0;

            function AA(i, DR) {
                var DS = "pr-image-snippet-holder-" + ++Be;
                i.write('<div id="' + DS + '"></div>');
                var DQ = document.getElementById(DS);
                DQ.write = function (DT) {
                    DQ.innerHTML += DT;
                };
                Bj.push({docRoot: DQ, params: DR, methodName: "imageSnippet", methodParent: "display"});
            }

            E.display.imageSnippet = AA;
            var F = 0;

            function DN(i, DR) {
                var DS = "pr-profile-holder-" + ++F;
                i.write('<div id="' + DS + '"></div>');
                var DQ = document.getElementById(DS);
                DQ.write = function (DT) {
                    DQ.innerHTML += DT;
                };
                Bj.push({docRoot: DQ, params: DR, methodName: "profile", methodParent: "display"});
            }

            E.display.profile = DN;
            var A8 = document.createElement("script");
            A8.setAttribute("src", Am() + "/fulljs/full.js");
            A8.setAttribute("type", "text/javascript");
            BW(A8);
            return E;
        }

        function X(DR, DQ) {
            var i = AN(DR, DQ, CB, window, As);
            if (As.pr_all_locales_hash.hasOwnProperty(i)) {
                return i;
            } else {
                return As.pr_locale;
            }
        }

        function Ac(i) {
            var DR = {};
            for (var DQ in i) {
                DR[DQ] = i[DQ];
            }
            return DR;
        }

        E.cloneObject = Ac;

        function C3(i) {
            if ("https:" == document.location.protocol) {
                return i.replace(/^http:\/\//i, "https://");
            } else {
                return i;
            }
        }

        function Cn(i) {
            var DR = "res.cloudinary.com";
            var DQ = (i.toLowerCase().indexOf(DR) > -1);
            if (DQ) {
                return true;
            }
            return false;
        }

        function AM(i) {
            if (i) {
                if (!Cn(i)) {
                    i = "//images.powerreviews.com" + i;
                }
            }
            return i;
        }

        function k(DW) {
            if (M("pr_simplified_zip")) {
                var DS = new jsSHA("SHA-256", "TEXT");
                DS.update(DW);
                var DT = DS.getHash("HEX").toUpperCase();
                var DQ = "/";
                var DX = DT.substr(0, 2) + DQ + DT.substr(2, 2) + DQ + DT.substr(4, 2) + DQ + DT;
                return DX;
            }
            var DV = 0;
            var DU;
            for (DU = 0; DU < DW.length; DU++) {
                var DZ = DW.charCodeAt(DU);
                DZ = DZ * Math.abs(255 - DZ);
                DV += DZ;
            }
            DV = DV % 1023;
            DV = DV + "";
            var DR = 4;
            var DY = DV.split("");
            for (DU = 0; DU < DR - DV.length; DU++) {
                DY.unshift("0");
            }
            DV = DY.join("");
            DV = DV.substring(0, DR / 2) + "/" + DV.substring(DR / 2, DR);
            return DV;
        }

        function CO(i) {
            return ["1 Stars", "2 Stars", "3 Stars", "4 Stars", "5 Stars"];
        }

        function Ba(i, DR) {
            if (Bq) {
                return true;
            } else {
                if (!R(DR)) {
                    return false;
                }
            }
            Bq = true;
            var DV = M("pr_widget_url", DR);
            i.write("<script type='text/javascript' src='" + DV + "'><\/script>");
            if (!document.getElementById(A2) && !M("pr_style_sheet_override_url")) {
                var DU = document.createElement("script");
                DU.setAttribute("type", "text/javascript");
                i.write('<link rel="stylesheet" href="' + Am(DR) + '/review-display/legacy-responsive/styles.css" type="text/css" id="' + A2 + '">\n');
                DU.setAttribute("src", Am(DR) + "/review-display/legacy-responsive/js/rd-styles.js");
                BW(DU);
                J(DR);
            }
            var DW = Z(DR) + "/engine/merchant_styles2.css";
            var DQ = AT(M("pr_style_sheet", DR));
            if (M("pr_allow_engine_css_override", DR) && DQ) {
                DW = DQ;
            }
            if (!document.getElementById(BB)) {
                i.write('<link rel="stylesheet" href="' + DW + '" type="text/css" id="' + BB + '">\n');
            }
            if (window.document && window.location) {
                if (Bl(DR) && !M("pr_style_sheet_override_url")) {
                    AF(DR);
                } else {
                    if (!!M("pr_style_sheet_override_url")) {
                        var DS = document.head || document.getElementsByTagName("head")[0];
                        var DT = document.createElement("link");
                        DT.href = M("pr_style_sheet_override_url", DR);
                        DT.type = "text/css";
                        DT.rel = "stylesheet";
                        DT.id = A2;
                        DS.appendChild(DT);
                    }
                }
            }
            m({"type": "init"}, DR);
            setTimeout(function () {
                m({"type": "objects", "count": CU}, DR);
            }, 5000);
            return true;
        }

        function Bl(i) {
            if (parseInt(DC("pr_review_display_split_testing_enabled")) === 1) {
                return true;
            }
            return AN("pr_review_display_split_testing_enabled", CB, i, window, As) === "true";
        }

        function AF(DQ) {
            var DR = document.head || document.getElementsByTagName("head")[0];
            var DT = document.createElement("link");
            DT.href = Z(DQ) + "/engine/pr_styles_review.css";
            DT.type = "text/css";
            DT.rel = "stylesheet";
            DT.id = A2;
            DR.appendChild(DT);
            var DS = Am(DQ);
            var i = DS + "/review-display/config.js";
            var DU = i.replace(/^(http[s]?:\/\/)|(\/\/)/, "");
            CY(i, DU, function (DV) {
                DP(DQ, DV, DT);
            }, DQ);
        }

        function DP(De, DR, DV) {
            var i = M("pr_merchant_group_id");
            var DY = M("pr_merchant_id");
            var Dd = M("pr_site_id");
            var DU = (DR["mid" + DY] || DR["mgid" + i + "sid" + Dd] || DR["mgid" + i]);
            if (DU) {
                var DQ = DU;
                var DW;
                var DT = parseInt(DC("pr_review_display_split_test_override"));
                if (DT !== NaN && DQ[DT]) {
                    DW = DQ[DT];
                } else {
                    var DS = Math.abs(B(E.tracker.getUID()));
                    var DX = 100;
                    var Dc = DS % DX;
                    for (var Db = 0; Db < DQ.length; Db++) {
                        var Da = DQ[Db];
                        if (Dc >= Da.min && Dc < Da.max) {
                            DW = Da;
                            break;
                        }
                    }
                    var DZ = "LEGACY_RESPONSIVE";
                    if (!!DW) {
                        DZ = DW.group_id;
                    }
                    C1.trackPageview("rd", {
                        locale: M("pr_locale", De),
                        pageId: M("pr_page_id", De),
                        merchantId: M("pr_merchant_id", De),
                        siteId: M("pr_site_id", De),
                        engineVersion: "2",
                        eventType: "test",
                        tg: DZ
                    });
                }
                if (!DW) {
                    return;
                }
                DV.href = DW.path + "/styles.css";
                CY(DW.path + "/js/rd-styles.js", null, null, null);
                J(De);
            }
        }

        function J(i) {
            var DR = ".pr-stars { background-image: url(" + Z(i) + "/engine/images/stars.gif); } .pr-stars-small { background-image: url(" + Z(i) + "/engine/images/stars_small.gif); }";
            var DQ = document.head || document.getElementsByTagName("head")[0];
            var DS = document.createElement("style");
            DS.type = "text/css";
            if (DS.styleSheet) {
                DS.styleSheet.cssText = DR;
            } else {
                DS.appendChild(document.createTextNode(DR));
            }
            if (!!DQ.firstChild) {
                DQ.insertBefore(DS, DQ.firstChild);
            } else {
                DQ.appendChild(DS);
            }
        }

        function B(DU) {
            var DT = 0, DR, DS, DQ;
            if (DU.length == 0) {
                return DT;
            }
            for (DR = 0, DQ = DU.length; DR < DQ; DR++) {
                DS = DU.charCodeAt(DR);
                DT = ((DT << 5) - DT) + DS;
                DT |= 0;
            }
            return DT;
        }

        function DC(DR) {
            if (!U) {
                U = {};
                for (var DQ = document.cookie.split(/;\s*/), DT = DQ.length - 1; DT >= 0; DT--) {
                    var DU = DQ[DT].split("=");
                    var DS = DU[0];
                    var DV = DU[1];
                    U[DS] = DV;
                }
            }
            return U[DR];
        }

        function R(i) {
            if (CI) {
                return true;
            } else {
                if (!M("pr_page_id", i) && !M("pr_merchant_user_id", i)) {
                    return false;
                }
            }
            CI = true;
            return true;
        }

        function BE(i, DQ, DR) {
            if (!document.getElementById(i)) {
                setTimeout(function () {
                    BE(i, DQ, DR);
                }, 1000);
            } else {
                B4(i, DQ, DR);
            }
        }

        function B4(i, DR, DS) {
            try {
                if (!DR) {
                    DR = "";
                }
                Cx(function () {
                    Cf(document.getElementById(i), DR);
                    if (DS) {
                        DS();
                    }
                });
            } catch (DQ) {
            }
        }

        E.common.writeContentToDivNested = B4;

        function Cf(DR, DQ) {
            if (DR.parentNode) {
                var i = document.createElement("div");
                i.id = DR.id;
                i.className = DR.className;
                i.innerHTML = DQ;
                DR.parentNode.replaceChild(i, DR);
                return i;
            } else {
                DR.innerHTML = DQ;
                return DR;
            }
        }

        function Cx(i) {
            if (typeof i == "function") {
                (function () {
                    if (W()) {
                        try {
                            document.documentElement.doScroll("left");
                        } catch (DQ) {
                            setTimeout(arguments.callee, 50);
                            return;
                        }
                    }
                    i();
                    i = null;
                })();
            }
        }

        function W() {
            return typeof document.all != "undefined" && typeof window.opera == "undefined" && !(navigator.vendor == "KDE");
        }

        function u(i) {
            new Image().src = i;
        }

        function Z(DQ) {
            var i = M("pr_zip_location", DQ);
            if (i.charAt(i.length - 1) != "/") {
                i += "/";
            }
            i += M("pr_powerreviews_root", DQ);

            i = '/on/demandware.static/-/Sites-pc-catalog-nav/en_US/v1502797375025/pwr'

            return i;
        }

        E.common.getDocRoot = Z;

        function C5(i) {
            return (i + "").replace(/\W/g, "__");
        }

        function A7(DQ, DS, DR, i) {
            this.pageId = DQ;
            this.fullReviewCount = DS;
            this.quickReviewCount = DR;
            this.averageRating = i;
            this.getFullReviewCount = function () {
                return this.fullReviewCount;
            };
            this.getQuickReviewCount = function () {
                return this.quickReviewCount;
            };
            this.getAverageRating = function () {
                return this.averageRating;
            };
            this.getPageId = function () {
                return this.pageId;
            };
        }

        function CS(DQ, i, DR) {
            return DR && DR["locales"] && DR["locales"][i] && DR["locales"][i]["p" + DQ];
        }

        function BK(DR) {
            var DS = document.getElementsByName(DR);
            for (var DQ = 0; DQ < DS.length; DQ++) {
                if (DS[DQ].checked) {
                    return DS[DQ].value;
                }
            }
            return null;
        }

        function AU(i, DR, DQ) {
            return i.replace(new RegExp(DR, "g"), DQ);
        }

        function AT(i) {
            return i && i.replace(/^\s+|\s+$/g, "");
        }

        function AE(i) {
            if (typeof i == "string") {
                return i.replace(/\n/g, "<br />");
            } else {
                return i;
            }
        }

        function CY(DR, DS, DV, DQ) {
            var DT = Z(DQ);
            var DS = DS || DR.substring(DR.indexOf(DT) + DT.length + 1);
            if (Bw[DS]) {
                DV(Bw[DS]);
            } else {
                var i = document.createElement("script");
                var DU = function () {
                    if (Bw[DS]) {
                        if (i.parentNode) {
                            i.parentNode.removeChild(i);
                        }
                        DV(Bw[DS]);
                    }
                };
                if (W()) {
                    i.onreadystatechange = DU;
                } else {
                    i.onload = DU;
                }
                i.type = "text/javascript";
                i.charset = "utf-8";
                i.src = DR;
                document.getElementsByTagName("head")[0].appendChild(i);
                CU++;
            }
        }

        function v(i, DQ, DR) {
            Bh[DQ] = DR;
            Ch(i);
        }

        function Bm() {
            return Bh;
        }

        E.common.getCallbacks = Bm;

        function Ch(DQ) {
            var i = document.createElement("script");
            i.type = "text/javascript";
            i.charset = "utf-8";
            i.src = DQ;
            document.getElementsByTagName("head")[0].appendChild(i);
        }

        function d(DR) {
            var i = DR.key;
            if (i) {
                var DQ = Bh[i];
                if (DQ) {
                    DQ(DR);
                }
            }
        }

        E.common.generalCallback = d;

        function DI(DU, DV, DQ) {
            if (DU.className) {
                var DR = DU.className.split(" ");
                if (DQ) {
                    var DT = DV.toUpperCase();
                    for (var DS = 0; DS < DR.length; DS++) {
                        if (DR[DS].toUpperCase() == DT) {
                            DR.splice(DS, 1);
                            DS--;
                        }
                    }
                }
                DR[DR.length] = DV;
                DU.className = DR.join(" ");
            } else {
                DU.className = DV;
            }
        }

        function DK(DT, DU) {
            if (DT.className) {
                var DQ = DT.className.split(" ");
                var DS = DU.toUpperCase();
                for (var DR = 0; DR < DQ.length; DR++) {
                    if (DQ[DR].toUpperCase() == DS) {
                        DQ.splice(DR, 1);
                        DR--;
                    }
                }
                DT.className = DQ.join(" ");
            }
        }

        function l(i, DR) {
            var DQ = new RegExp("\\b" + DR + "\\b");
            return DQ.test(i.className);
        }

        function Cv(DX, DY, DZ) {
            if (!DX) {
                return [];
            }
            var DV = (DY == "*" && DX.all) ? DX.all : DX.getElementsByTagName(DY);
            var DU = new Array();
            var Da = new Array();
            if (typeof DZ == "object") {
                for (var DT = 0; DT < DZ.length; DT++) {
                    Da.push(new RegExp("(^|\\s)" + DZ[DT].replace(/\-/g, "\\-") + "(\\s|$)"));
                }
            } else {
                Da.push(new RegExp("(^|\\s)" + DZ.replace(/\-/g, "\\-") + "(\\s|$)"));
            }
            var DQ;
            var DW;
            for (var DS = 0; DS < DV.length; DS++) {
                DQ = DV[DS];
                DW = true;
                for (var DR = 0; DR < Da.length; DR++) {
                    if (!Da[DR].test(DQ.className)) {
                        DW = false;
                        break;
                    }
                }
                if (DW) {
                    DU.push(DQ);
                }
            }
            return DU;
        }

        function Ax(DQ, i) {
            if (i(DQ) == true) {
                return DQ;
            } else {
                if (DQ.parentNode) {
                    return arguments.callee(DQ.parentNode, i);
                } else {
                    return false;
                }
            }
        }

        function A9(i, DQ) {
            i.parentNode.insertBefore(DQ, i.nextSibling);
        }

        function CX(DQ, i) {
            c[DQ] = i;
            if (i) {
                i._key = DQ;
            }
        }

        function Ah(i) {
            if (i) {
                return i["_key"];
            } else {
                return "";
            }
        }

        function A5(i) {
            return c[i] || {};
        }

        E.common.getOptions = A5;

        function CD(DQ, i, DU, DS) {
            var DT = o[DQ + i];
            if (!DT) {
                var DR = Z(DS) + "/content/" + k(DQ) + "/contents.js";
                if (M("pr_simplified_zip")) {
                    DR = Z(DS) + "/content/" + i + "/" + k(DQ) + "/contents.js";
                }
                CY(DR, null, function (DV) {
                    DT = CS(DQ, i, DV);
                    o[DQ + i] = DT ? DT : "none";
                    DU(DT);
                }, DS);
            } else {
                if (DT == "none") {
                    DU(null);
                } else {
                    DU(DT);
                }
            }
        }

        function Cq(DQ, i, DT, DS) {
            var DR = Z(DS) + "/content/" + k(DQ) + "/" + DQ + "-" + i + "-rollup.js";
            if (M("pr_simplified_zip")) {
                DR = Z(DS) + "/content/" + i + "/" + k(DQ) + "/" + i + "-rollup.js";
            }
            CY(DR, null, function (DU) {
                if (DU) {
                    DT(DU.rollup);
                }
            }, DS);
        }

        function Af(DQ, i, DT, DS) {
            if (!p) {
                var DR = Z(DS) + "/content/" + k(DQ) + "/" + DQ + "-" + i + "-meta.js";
                if (M("pr_simplified_zip")) {
                    DR = Z(DS) + "/content/" + i + "/" + k(DQ) + "/" + i + "-meta.js";
                }
                CY(DR, null, function (DU) {
                    p = DU ? DU.metadata : null;
                    DT();
                }, DS);
            } else {
                DT();
            }
        }

        function DJ(DQ, i, DT, DU, DS) {
            if (!L[DQ + "-" + i + "-" + DT]) {
                var DR = Z(DS) + "/content/" + k(DQ) + "/" + DQ + "-" + i + "-" + DT + "-reviews.js";
                if (M("pr_simplified_zip")) {
                    DR = Z(DS) + "/content/" + i + "/" + k(DQ) + "/" + i + "-" + DT + "-reviews.js";
                }
                CY(DR, null, function (DY) {
                    var DW = [];
                    for (var DX = 0; DX < DY.length; DX++) {
                        var DV = DY[DX].r;
                        AI[DV.id] = DV;
                        DW.push(DV);
                    }
                    L[DQ + "-" + i + "-" + DT] = DW;
                    DU();
                }, DS);
            } else {
                DU();
            }
        }

        function w(DR, DQ, DV, DW, DS) {
            var DU = DV.length;
            for (var DT = 0; DT < DV.length; DT++) {
                DJ(DR, DQ, DV[DT], function () {
                    if (--DU <= 0) {
                        DW();
                    }
                }, DS);
            }
        }

        function T(i) {
            return Math.round(i * 2) / 2;
        }

        function m(DQ, i) {
        }

        function C7(DT, DQ) {
            var i = null;
            if (DT) {
                var DR = M("pr_badge_table", DQ);
                for (var DS = 0; DS < DT.length; DS++) {
                    i = DR[DT[DS]];
                    if (i) {
                        break;
                    }
                }
            }
            return i;
        }

        function Ae(DR, DV, DX) {
            var DY = [];
            if (DR) {
                var DU = Z(DX);
                var DS = AU(M("pr_expert_badge_definitions_url", DX), "~~~LOCALE~~~", DV);
                var DQ = DR.locales[DV];
                var DW = (DR.label == "staff" || DR.label == "staff-expert");
                if (DQ) {
                    var DT = DR.label.replace(/[^-_a-zA-Z]/g, "_");
                    var i = "pr-review-author-" + DT + "-wrapper";
                    DY.push('<div class="');
                    DY.push(i);
                    DY.push(" ");
                    DY.push(i);
                    DY.push("-");
                    DY.push(DV);
                    DY.push('">');
                    if (DW) {
                        DY.push('<a href="');
                        DY.push(DS);
                        DY.push('">');
                    }
                    DY.push('<img class="pr-badge pr-');
                    DY.push(DT);
                    DY.push('" src="');
                    DY.push(DU);
                    DY.push("/engine/images/badges/");
                    DY.push(DQ.filename);
                    DY.push('" alt="');
                    DY.push(DQ.hovertext);
                    DY.push('" title="');
                    DY.push(DQ.hovertext);
                    DY.push('" />');
                    if (DW) {
                        DY.push("</a>");
                    }
                    DY.push("</div>");
                }
            }
            DY.push("<!-- woozle -->");
            return DY.join("");
        }

        function A4(DS, DQ, DR) {
            var i = [];
            i.push('<div class="pr-fb-follow-thankyou-wrapper"><p class="pr-fb-follow-thankyou-label">');
            i.push("<span><b>Thank You.</b></span>You have successfully signed up to receive emails.");
            i.push("</p></div>");
            return i.join("");
        }

        function CT(DS, DQ, DR) {
            var i = [];
            i.push('<div class="pr-fb-follow-error-wrapper"><p class="pr-fb-follow-error-label"><span>');
            i.push("Sorry");
            i.push("</span></p><p>");
            i.push("We are having difficulties submitting your email right now. Please try again later.");
            i.push("</p></div>");
            return i.join("");
        }

        function Am(DQ) {
            var DR = AN("pr_ui_library_base_url", CB, DQ, window, As);
            var i = /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?(powerreviews\.com|localhost)(.*)/.test(DR);
            if (!i) {
                DR = AN("pr_ui_library_base_url", As);
            }
            return DR;
        }

        function BC(DQ) {
            if (!!DC("pr_war_server_path")) {
                return DC("pr_war_server_path");
            }
            var i = Am(DQ);
            var DR = AN("pr_war_server_path", CB, DQ, window, As);
            if (!!DR && DR !== "0") {
                return i + "/" + DR;
            } else {
                return "";
            }
        }

        E.getWARServerPath = BC;
        if (!E.submission) {
            E.submission = {getWARServerPath: BC};
        }

        function DM(i, DQ, DS) {
            var DR;
            if (i) {
                DR = M(i, DS);
            }
            if (!DR) {
                var DT = M("pr_base_services_urls", DS);
                DR = DT["-"];
                var DU = M("pr_site_id", DS);
                if (DU && DT[DU]) {
                    DR = DT[DU];
                }
                DR += DQ;
            }
            return DR;
        }

        function Aw(DQ) {
            var DR = M("pr_base_follow_landing_urls", DQ);
            var i = DR["-"];
            var DS = M("pr_site_id", DQ);
            if (DS && DR[DS]) {
                i = DR[DS];
            }
            i += "/fbonsite/";
            return i;
        }

        function y(DS, DQ) {
            var i = DM(null, "FacebookDisplayProfileController.dox", DQ);
            var DR = Al(DS);
            if (DR.length) {
                i += "?" + DR;
            }
            return i;
        }

        function CH(DS, DQ) {
            var i = DM(null, "FacebookReviewStatementController.dox?context=STATEMENT", DQ);
            var DR = Al(DS);
            if (DR.length) {
                i += "&" + DR;
            }
            return i;
        }

        function Cu(DS, DQ) {
            var i = DM(null, "FacebookGetAdviceController/getAdviceQuestionForm.dox", DQ);
            var DR = Al(DS);
            if (DR.length) {
                i += "?" + DR;
            }
            return i;
        }

        function j(DS, DQ) {
            var i = Aw(DQ);
            i += "askReviewer/displayForm.dox";
            var DR = Al(DS);
            if (DR.length) {
                i += "?" + DR;
            }
            return i;
        }

        function Az(DS, DR) {
            var i = X("pr_locale", DR);
            var DU = M("pr_merchant_group_id", DR);
            var DT = BG(M("pr_site_id", DR) || "-");
            var DQ = j({"locale": i, "merchantGroupId": DU, "siteId": DT, "sharedReviewId": DS.sharedReviewId}, DR);
            Ap(DQ, 520, 600, {"location": "no"});
        }

        E.common.showAskQuestionPopup = Az;

        function C9(DT, DS) {
            var DR = M("pr_page_id", DS);
            var i = X("pr_locale", DS);
            var DW = M("pr_merchant_group_id", DS);
            var DV = M("pr_site_id", DS) || "-";
            var DU = DT.avgRating || 0;
            var DQ = Cu({"mgId": DW, "siteId": DV, "pageId": DR, "avgRating": DU, "locale": i}, DS);
            Ap(DQ, 450, 600, {"location": "no"});
        }

        E.common.showFacebookGetAdvicePopup = C9;

        function Al(DQ) {
            var i = [];
            for (var DR in DQ) {
                i.push(DR + "=" + BG(DQ[DR]));
            }
            return i.join("&");
        }

        function Cs(DT, DR, i) {
            var DU = Math.min((75 / DR), (100 / i));
            var DQ = Math.floor(DU * DR);
            var DS = Math.floor(DU * i);
            return "//res.cloudinary.com/powerreviews/image/upload/f_auto,w_" + DQ + ",h_" + DS + ",q_50/" + DT;
        }

        E.common.constructThumbnailUri = Cs;

        function AZ(DS, DQ, DR, i) {
            if (DQ.indexOf("cloudinary") === -1) {
                return;
            }
            var DT = DQ.match(/\/(\w+\/\w+)\./)[1];
            DS.target.src = Cs(DT, DR, i);
        }

        E.common.cloudinaryThumbnailFallback = AZ;

        function B2(DR, DS, i, DQ) {
            window.open("https://images2.powerreviews.com/media_popup.html?type=image&url=" + BG(DR), "sizedWindow", "toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,width=" + DS + ",height=" + i + ",top=100,left=100");
        }

        E.common.showImagePopup = B2;

        function Ap(i, DX, DQ, DU) {
            var DS = {
                "toolbar": "no",
                "directories": "no",
                "status": "no",
                "menubar": "no",
                "scrollbars": "yes",
                "resizable": "yes",
                "location": "yes",
                "top": "200",
                "left": "200"
            };
            var DV = [];
            for (var DR in DS) {
                DV.push(DR + "=" + ((DU && DU[DR]) || DS[DR]));
            }
            var DT = DV.join(",");
            var DW = window.open(i, "smallWindow", "width=" + DQ + ",height=" + DX + "," + DT);
            if (window.focus) {
                DW.focus();
            }
        }

        E.common.showSmallPopup = Ap;

        function AG(DQ, i) {
            window.open("https://images2.powerreviews.com/media_popup.html?type=video&url=" + BG(DQ), "sizedWindow", "toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,width=435,height=350,top=100,left=100");
        }

        E.common.showVideoPopup = AG;

        function q(DT, DR, DQ, DS) {
            var i = function () {
                DK(document.getElementById(DT.target), "pr-open");
                DI(document.getElementById(DT.target), "pr-closed");
            };
            var DU = function () {
                DK(document.getElementById(DT.target), "pr-closed");
                DI(document.getElementById(DT.target), "pr-open");
            };
            if (window.event) {
                DS = window.event;
                DS.cancelBubble = true;
                target = window.event.srcElement;
                currentTarget = event.srcElement.id;
            } else {
                if (DS) {
                    DS.stopPropagation();
                    target = DS.target;
                    currentTarget = DS.currentTarget.id;
                } else {
                    return;
                }
            }
            if (DR == "show") {
                if (document.getElementById(DT.target).className != "pr-open") {
                    this.timedShow = setTimeout(DU, 400);
                } else {
                    if (Ax(target, function (DV) {
                            if (DV.id == DT.target) {
                                return true;
                            }
                        })) {
                        if (this.timedHide != null) {
                            window.clearTimeout(this.timedHide);
                        }
                    }
                }
            } else {
                if (DR == "hide") {
                    if (this.timedHide != null) {
                        window.clearTimeout(this.timedShow);
                    }
                    if (currentTarget == DT.link || currentTarget == DT.target || Ax(target, function (DV) {
                            if (DV.id == DT.target) {
                                return true;
                            }
                        })) {
                        this.timedHide = setTimeout(i, 800);
                    } else {
                        if (this.timedHide != null) {
                            window.clearTimeout(this.timedHide);
                        }
                    }
                }
            }
        }

        E.common.togglePopOut = q;

        function DG(DQ) {
            var i = document.getElementById(DQ);
            DK(i, "pr-hidden");
        }

        E.display.showElement = DG;

        function g(DQ) {
            var i = document.getElementById(DQ);
            DI(i, "pr-hidden");
        }

        E.display.hideElement = g;

        function AX(DT, DU, DR, i) {
            var DQ = DT.substring(DU, DR);
            var DS = DQ.lastIndexOf(" ");
            DQ = DQ.substring(0, DS);
            if (i) {
                DQ += "...";
            }
            return DQ;
        }

        function AC(DS, DU, DR, i) {
            var DQ = DS.substring(DU, DR);
            var DT = DQ.lastIndexOf(";");
            if (DT > DR - 8) {
                DQ = DQ.substring(0, DT);
            }
            if (i) {
                DQ += "...";
            }
            return DQ;
        }

        function C2(i, DR) {
            var DQ = document.getElementById(DR).innerHTML;
            BE(i, DQ);
        }

        function Ab(i) {
            var DQ = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return DQ.test(i);
        }

        function C8(DR, DZ) {
            var DQ = e.parse(DR.getAttribute("prData"));
            var DW = document.getElementById(DQ.target);
            var DV = DW.value;
            var DY = document.getElementById("pr-fb-follow-errorMsg-" + DQ.locale + "-" + DQ.pageId);
            if (l(DR, "disabled")) {
                return false;
            } else {
                if (Ab(DV)) {
                    if (!l(DY, "pr-hidden")) {
                        DI(DY, "pr-hidden");
                    }
                    var DT = document.createElement("img");
                    DT.src = Z(DZ) + "/engine/images/pr_loading.gif";
                    DT.style.cssText = "position:absolute;top:25px;right:50px;";
                    var DS = function (Db) {
                        var Da = Db;
                        if (Da.result.status.toLowerCase() == "ok") {
                            var Dc = A4(DQ, DQ.locale, DZ);
                        } else {
                            var Dc = CT(DQ, DQ.locale, DZ);
                        }
                        BE("pr-fb-follow-info-wrapper-" + DQ.locale + "-" + DQ.pageId, Dc);
                        DI(DT, "pr-hidden");
                        DK(DR, "pr-hidden");
                        DI(DR, "disabled");
                    };
                    var DU = Aw(DZ);
                    var DX = "verifyFollowEmail-" + DQ.type + "-" + DQ.keyValue;
                    var i = DU + DQ.type + "/" + DQ.locale + "/" + DQ.merchantGroupId + "/" + DQ.siteId + "/" + DQ.keyValue + "?email=" + encodeURIComponent(DV) + "&key=" + encodeURIComponent(DX);
                    v(i, DX, DS);
                    DW.disabled = true;
                    A9(DR, DT);
                    DI(DR, "pr-hidden");
                } else {
                    DK(DY, "pr-hidden");
                }
            }
        }

        E.common.validateAndProcessEmail = C8;

        function BL(DT, DS, DQ) {
            var DR = document.getElementById(DT);
            if (DR != null) {
                var i = DR.value;
                if (i == DS) {
                    DR.value = "";
                    DK(DR, DQ);
                }
            }
        }

        function s(DT, DS, DQ) {
            var DR = document.getElementById(DT);
            if (DR != null) {
                var i = AT(DR.value);
                if (i == "") {
                    DR.value = DS;
                    DI(DR, DQ);
                }
            }
        }

        var B9 = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (DS) {
                var DQ = "";
                var DZ, DX, DV, DY, DW, DU, DT;
                var DR = 0;
                DS = B9._utf8_encode(DS);
                while (DR < DS.length) {
                    DZ = DS.charCodeAt(DR++);
                    DX = DS.charCodeAt(DR++);
                    DV = DS.charCodeAt(DR++);
                    DY = DZ >> 2;
                    DW = ((DZ & 3) << 4) | (DX >> 4);
                    DU = ((DX & 15) << 2) | (DV >> 6);
                    DT = DV & 63;
                    if (isNaN(DX)) {
                        DU = DT = 64;
                    } else {
                        if (isNaN(DV)) {
                            DT = 64;
                        }
                    }
                    DQ = DQ + this._keyStr.charAt(DY) + this._keyStr.charAt(DW) + this._keyStr.charAt(DU) + this._keyStr.charAt(DT);
                }
                return DQ;
            }, decode: function (DS) {
                var DQ = "";
                var DZ, DX, DV;
                var DY, DW, DU, DT;
                var DR = 0;
                DS = DS.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (DR < DS.length) {
                    DY = this._keyStr.indexOf(DS.charAt(DR++));
                    DW = this._keyStr.indexOf(DS.charAt(DR++));
                    DU = this._keyStr.indexOf(DS.charAt(DR++));
                    DT = this._keyStr.indexOf(DS.charAt(DR++));
                    DZ = (DY << 2) | (DW >> 4);
                    DX = ((DW & 15) << 4) | (DU >> 2);
                    DV = ((DU & 3) << 6) | DT;
                    DQ = DQ + String.fromCharCode(DZ);
                    if (DU != 64) {
                        DQ = DQ + String.fromCharCode(DX);
                    }
                    if (DT != 64) {
                        DQ = DQ + String.fromCharCode(DV);
                    }
                }
                DQ = B9._utf8_decode(DQ);
                return DQ;
            }, _utf8_encode: function (DQ) {
                DQ = DQ.replace(/\r\n/g, "\n");
                var i = "";
                for (var DS = 0; DS < DQ.length; DS++) {
                    var DR = DQ.charCodeAt(DS);
                    if (DR < 128) {
                        i += String.fromCharCode(DR);
                    } else {
                        if ((DR > 127) && (DR < 2048)) {
                            i += String.fromCharCode((DR >> 6) | 192);
                            i += String.fromCharCode((DR & 63) | 128);
                        } else {
                            i += String.fromCharCode((DR >> 12) | 224);
                            i += String.fromCharCode(((DR >> 6) & 63) | 128);
                            i += String.fromCharCode((DR & 63) | 128);
                        }
                    }
                }
                return i;
            }, _utf8_decode: function (DQ) {
                var DR = "";
                var DT = 0;
                var DU = 0;
                var DS = 0;
                while (DT < DQ.length) {
                    DU = DQ.charCodeAt(DT);
                    if (DU < 128) {
                        DR += String.fromCharCode(DU);
                        DT++;
                    } else {
                        if ((DU > 191) && (DU < 224)) {
                            DS = DQ.charCodeAt(DT + 1);
                            DR += String.fromCharCode(((DU & 31) << 6) | (DS & 63));
                            DT += 2;
                        } else {
                            DS = DQ.charCodeAt(DT + 1);
                            c3 = DQ.charCodeAt(DT + 2);
                            DR += String.fromCharCode(((DU & 15) << 12) | ((DS & 63) << 6) | (c3 & 63));
                            DT += 3;
                        }
                    }
                }
                return DR;
            }
        };

        function CM(i) {
            if (i.length < 2) {
                i = "0" + i;
            }
            return i;
        }

        function Co(i, DQ) {
            if (i < 12) {
                return DQ[0];
            }
            return DQ[1];
        }

        function Bz(i) {
            var DQ = (i + 12) % 12;
            if (DQ == 0) {
                return "12";
            }
            return DQ.toString();
        }

        function DD(i) {
            var DQ = new Date(i.getFullYear(), 0, 1);
            return Math.ceil((i - DQ) / 86400000);
        }

        function CP(DQ, i) {
            return !(DQ < i || i < DQ);
        }

        function AL(De, Dc, DR) {
            try {
                var Db = {"en_US": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]};
                var DY = Db[Dc];
                var Dh = {"en_US": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""]};
                var DZ = Dh[Dc];
                var Df = {"en_US": ["", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]};
                var DW = Df[Dc];
                var DS = {"en_US": ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]};
                var Di = DS[Dc];
                var DQ = {"en_US": ["AM", "PM"]};
                var i = DQ[Dc];
                var DV = De.split("T")[0].split("-");
                var DU = De.split("T")[1].split(":");
                var DX = DV[1];
                if (DX[0] == "0") {
                    DX = DX[1];
                }
                DX = parseInt(DX) - 1;
                var Dg = new Date(Date.UTC(DV[0], DX, DV[2], DU[0], DU[1], DU[2]));
                var DT = [["MMMM", DZ[Dg.getMonth()]], ["MMM", DY[Dg.getMonth()]], ["MM", CM((Dg.getMonth() + 1).toString())], ["M", (Dg.getMonth() + 1).toString()], ["D", Dg.getDOY().toString()], ["dd", CM(Dg.getDate().toString())], ["d", Dg.getDate().toString()], ["EEEE", Di[Dg.getDay() + 1]], ["EEE", DW[Dg.getDay() + 1]], ["yyyy", Dg.getFullYear().toString()], ["y", Dg.getFullYear().toString().substring(2, 4)], ["H", Dg.getHours().toString()], ["h", Bz(Dg.getHours())], ["a", Co(Dg.getHours(), i)], ["m", Dg.getMinutes().toString()], ["s", Dg.getSeconds().toString()]];
                var Da = "{0,date,M/d/yyyy}";
                Da = Da.replace(/{.*?}/g, function (Dj) {
                    Dj = Dj.substring(Dj.indexOf(",") + 1);
                    Dj = Dj.substring(Dj.indexOf(",") + 1);
                    Dj = Dj.replace("}", "");
                    var Dl = "";
                    var Dk = Dj;
                    while (Dk != "") {
                        var Dn = false;
                        for (var Do = 0; Do < DT.length && !Dn; Do++) {
                            var Dm = DT[Do][0];
                            var Dp = DT[Do][1];
                            if (Dk.find(Dm) == 0) {
                                Dl += Dp;
                                Dk = Dk.substring(Dm.length);
                                Dn = true;
                            }
                        }
                        if (!Dn) {
                            Dl += Dk[0];
                            Dk = Dk.substring(1);
                        }
                    }
                    return Dl;
                });
                return Da;
            } catch (Dd) {
                return "";
            }
        }

        function AO(i) {
            return BG(B9.encode(i));
        }

        function CZ(i, DS) {
            var DQ = document.documentElement.getBoundingClientRect();
            var DU = i.getBoundingClientRect();
            var DT = DU.top - DQ.top;
            var DR = document.body;
            if (document.documentElement.scrollTop > 0) {
                DR = document.documentElement;
            }
            return A1(DR, DT, DS);
        }

        function A1(DR, DU, DT) {
            DU = Math.round(DU);
            DT = Math.round(DT);
            if (DT < 0) {
                return Promise.reject("bad duration");
            }
            if (DT === 0) {
                DR.scrollTop = DU;
                return Promise.resolve();
            }
            var DS = Date.now();
            var DQ = DS + DT;
            var DV = DR.scrollTop;
            var DW = DU - DV;
            var i = function (Da, DZ, DY) {
                if (DY <= Da) {
                    return 0;
                }
                if (DY >= DZ) {
                    return 1;
                }
                var DX = (DY - Da) / (DZ - Da);
                return DX * DX * (3 - 2 * DX);
            };
            return new Promise(function (DZ, DY) {
                var DX = DR.scrollTop;
                var Da = function () {
                    if (DR.scrollTop != DX && !BZ()) {
                        return;
                    }
                    var Dc = Date.now();
                    var Db = i(DS, DQ, Dc);
                    var Dd = Math.round(DV + (DW * Db));
                    DR.scrollTop = Dd;
                    if (Dc >= DQ) {
                        DZ();
                        return;
                    }
                    if (DR.scrollTop === DX && DR.scrollTop !== Dd) {
                        DZ();
                        return;
                    }
                    DX = DR.scrollTop;
                    setTimeout(Da, 0);
                };
                setTimeout(Da, 0);
            });
        }

        function BZ() {
            return (("ontouchstart" in window) || (navigator.msMaxTouchPoints > 0));
        }

        var e;
        if (!e) {
            e = {};
        }
        (function () {
            var DS = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                DU = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                DV, DQ,
                DX = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"},
                DW;

            function i(DY) {
                DU.lastIndex = 0;
                return DU.test(DY) ? '"' + DY.replace(DU, function (DZ) {
                    var Da = DX[DZ];
                    return typeof Da === "string" ? Da : "\\u" + ("0000" + DZ.charCodeAt(0).toString(16)).slice(-4);
                }) + '"' : '"' + DY + '"';
            }

            function DR() {
                return n < 10 ? "0" + n : n;
            }

            function DT(Df, Dc) {
                var Da, DZ, Dg, DY, Dd = DV, Db, De = Dc[Df];
                if (De && typeof De === "object" && typeof De.toJSON === "function") {
                    De = De.toJSON(Df);
                }
                if (typeof DW === "function") {
                    De = DW.call(Dc, Df, De);
                }
                switch (typeof De === "object" && Object.prototype.toString.apply(De)) {
                    case"[object Boolean]":
                    case"[object Number]":
                    case"[object String]":
                        De = De.valueOf();
                }
                switch (typeof De) {
                    case"string":
                        return i(De);
                    case"number":
                        return isFinite(De) ? String(De) : "null";
                    case"boolean":
                    case"null":
                        return String(De);
                    case"object":
                        if (!De) {
                            return "null";
                        }
                        DV += DQ;
                        Db = [];
                        if (Object.prototype.toString.apply(De) === "[object Date]") {
                            return isFinite(De.valueOf()) ? De.getUTCFullYear() + "-" + DR(De.getUTCMonth() + 1) + "-" + DR(De.getUTCDate()) + "T" + DR(De.getUTCHours()) + ":" + DR(De.getUTCMinutes()) + ":" + DR(De.getUTCSeconds()) + "Z" : null;
                        }
                        if (Object.prototype.toString.apply(De) === "[object Array]") {
                            DY = De.length;
                            for (Da = 0; Da < DY; Da += 1) {
                                Db[Da] = DT(Da, De) || "null";
                            }
                            Dg = Db.length === 0 ? "[]" : DV ? "[\n" + DV + Db.join(",\n" + DV) + "\n" + Dd + "]" : "[" + Db.join(",") + "]";
                            DV = Dd;
                            return Dg;
                        }
                        if (DW && typeof DW === "object") {
                            DY = DW.length;
                            for (Da = 0; Da < DY; Da += 1) {
                                if (typeof DW[Da] === "string") {
                                    DZ = DW[Da];
                                    Dg = DT(DZ, De);
                                    if (Dg) {
                                        Db.push(i(DZ) + (DV ? ": " : ":") + Dg);
                                    }
                                }
                            }
                        } else {
                            for (DZ in De) {
                                if (Object.prototype.hasOwnProperty.call(De, DZ)) {
                                    Dg = DT(DZ, De);
                                    if (Dg) {
                                        Db.push(i(DZ) + (DV ? ": " : ":") + Dg);
                                    }
                                }
                            }
                        }
                        Dg = Db.length === 0 ? "{}" : DV ? "{\n" + DV + Db.join(",\n" + DV) + "\n" + Dd + "}" : "{" + Db.join(",") + "}";
                        DV = Dd;
                        return Dg;
                }
            }

            if (typeof e.stringify !== "function") {
                e.stringify = function (Db, DZ, Da) {
                    var DY;
                    DV = "";
                    DQ = "";
                    if (typeof Da === "number") {
                        for (DY = 0; DY < Da; DY += 1) {
                            DQ += " ";
                        }
                    } else {
                        if (typeof Da === "string") {
                            DQ = Da;
                        }
                    }
                    DW = DZ;
                    if (DZ && typeof DZ !== "function" && (typeof DZ !== "object" || typeof DZ.length !== "number")) {
                        throw new Error("JSON.stringify");
                    }
                    return DT("", {"": Db});
                };
            }
            if (typeof e.parse !== "function") {
                e.parse = function (Db, DY) {
                    var Da;

                    function DZ(Df, De) {
                        var Dd, Dc, Dg = Df[De];
                        if (Dg && typeof Dg === "object") {
                            for (Dd in Dg) {
                                if (Object.prototype.hasOwnProperty.call(Dg, Dd)) {
                                    Dc = DZ(Dg, Dd);
                                    if (Dc !== undefined) {
                                        Dg[Dd] = Dc;
                                    } else {
                                        delete Dg[Dd];
                                    }
                                }
                            }
                        }
                        return DY.call(Df, De, Dg);
                    }

                    Db = String(Db);
                    DS.lastIndex = 0;
                    if (DS.test(Db)) {
                        Db = Db.replace(DS, function (Dc) {
                            return "\\u" + ("0000" + Dc.charCodeAt(0).toString(16)).slice(-4);
                        });
                    }
                    if (/^[\],:{}\s]*$/.test(Db.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                        Da = POWERREVIEWS.ext.evaluate("(" + Db + ")");
                        return typeof DY === "function" ? DZ({"": Da}, "") : Da;
                    }
                    throw new SyntaxError("JSON.parse");
                };
            }
        }());
        var Aa = {};
        var Aq = 0;
        var Ai = 1;
        var P = 2;
        var Cw = 3;
        var AH = 4;
        var B6 = 5;
        var Ao = null;
        var Bp = new Date();
        var A0 = {};
        var I = {};
        var Bt = {};

        function Q(i) {
            var DR = M("pr_site_id", i);
            var DQ;
            if (DR) {
                DQ = M("pr_merchant_table", i)["siteId-" + M("pr_site_id", i)];
            }
            if (!DQ) {
                DQ = M("pr_merchant_table", i)["m" + M("pr_merchant_id", i)];
            }
            return DQ;
        }

        function V(i, DQ) {
            var DR = M("pr_analytics_script_src", DQ);
            if (DR) {
                i.write('<script src="' + DR + '" type="text/javascript"><\/script>');
            }
        }

        function B7(DS, DU) {
            if (Ba(DS, DU)) {
                var DT = M("pr_page_id", DU);
                var DR = C5(DT);
                var DQ = X("pr_locale", DU);
                var i = "engine-" + DR + "-" + DQ;
                CX(i, DU);
                var DV = document.getElementById("pr-review-engine-" + DR);
                if (!DV) {
                    A3(DS, DR);
                }
                var DW = DV ? true : false;
                BF(DR, DQ, DW, DU);
                Ck(DR, DQ, DW, DU);
                if (A(DU)) {
                    if (!!DU.pr_product_description) {
                        DU.pr_product_description = DU.pr_product_description.substr(0, 300);
                    }
                    CE(DU);
                }
                V(DS, DU);
                if (!DV || M("pr_overwrite_inline_content", DU)) {
                    f(DR, DQ, i, DU);
                } else {
                    Bd(DT, DR, DU);
                    B1(DU);
                }
                BU(DR, DQ, DU);
            }
        }

        E.display.engine = B7;

        function Bd(DQ, i, DR) {
            var DU = document.getElementById("writeReview") || document.getElementById("write-review-" + i);
            if (DU) {
                var DS = N(DQ, DR);
                if (DS) {
                    DU.href = DS;
                    var DT = document.getElementById("pr-snapshot-footer-" + i);
                    if (DT) {
                        DT.style.display = "";
                    }
                }
            } else {
                setTimeout(function () {
                    Bd(DQ, i, DR);
                }, 100);
            }
        }

        function f(DR, DQ, i, DT) {
            var DS = M("pr_page_id", DT);
            An(DR, DQ, i, DT, function () {
                C4(DR);
                Bd(DS, DR, DT);
                B1(DT);
            });
        }

        E.display.displayInitialReviewBoxWrapper = f;

        function N(i, DQ) {
            var DR = M("pr_page_id_variant", DQ);
            var DS = M("pr_write_review", DQ);
            DS = AU(DS, "~~~PAGE_ID~~~", i);
            DS = AU(DS, "~~~VARIANT~~~", DR);
            return DS;
        }

        function A3(i, DR) {
            var DQ = "";
            DQ += '<div id="pr-review-engine-' + DR + '" class="pr-review-engine">';
            DQ += '<div id="pr-header-' + DR + '" class="pr-header"></div><div id="pr-contents-' + DR + '" class="pr-contents"></div>';
            DQ += "</div>";
            i.write(DQ);
        }

        function C4(DQ) {
            var DR = document.getElementById("pr-review-engine-screen-" + DQ);
            if (DR && DR.parentNode) {
                DR.parentNode.removeChild(DR);
            }
            var i = document.getElementById("pr-review-engine-" + DQ);
            if (i) {
                DK(i, "pr-review-engine-screened");
            }
        }

        function DF(DS, DT, DQ) {
            var DR = AT(M("pr_analytics_account", DQ));
            if (window.urchinTracker && DR) {
                var i = "";
                var DU = typeof _uacct != "undefined";
                if (DU) {
                    i = _uacct;
                }
                _uacct = DR;
                urchinTracker("/product_with_" + (DS ? DS : 0) + "_reviews");
                if (DU) {
                    _uacct = i;
                }
            }
        }

        function Cm(DR, DS) {
            if (!Bt[DR]) {
                var DU = {};
                var DQ = M("pr_all_locales", DS);
                for (var DT = 0; DT < DQ.length; DT++) {
                    (function (DV) {
                        CD(DR, DQ[DV], function (DW) {
                            var i = (DW && DW.reviews && DW.reviews.review_count) || 0;
                            DU[DQ[DV]] = i;
                        });
                    })(DT);
                }
                Bt[DR] = DU;
            }
            return Bt[DR];
        }

        function An(DR, DQ, i, DS, DT) {
            CD(DR, DQ, function (DX) {
                var Db = (DX && DX.reviews && DX.reviews.review_count) || 0;
                var DW = (DX && DX.reviews && DX.reviews.review_ratings) || [0, 0, 0, 0, 0];
                var DZ;
                var DY = function () {
                    if (--DZ <= 0) {
                        DT();
                    }
                };
                if (Db > 0) {
                    DZ = 2;
                    O(DR, DQ, Db, DW, i, DS, DY);
                    Bb(1, DR, DQ, i, DS, DY);
                } else {
                    DZ = 1;
                    O(DR, DQ, Db, DW, i, DS, DY);
                }
                var Dc = document.querySelector(".pr-attribute-ratings");
                if (Dc) {
                    var DV = [];
                    for (var DU = 0; DU < DW.length; DU++) {
                        var Da = DW[DU];
                        if (Da > 0) {
                            DV.push(DU + 1);
                        }
                    }
                    C1.trackPageview("rd", {
                        locale: M("pr_locale", DS),
                        pageId: M("pr_page_id", DS),
                        merchantId: M("pr_merchant_id", DS),
                        siteId: M("pr_site_id", DS),
                        engineVersion: "2",
                        af: DV.join(";")
                    });
                }
            }, DS);
        }

        function BU(DQ, i, DR) {
            CD(DQ, i, function (DT) {
                var DS = 0;
                var DU = 0;
                if (DT && DT.reviews) {
                    DS = DT.reviews.review_count;
                    DU = DT.reviews.avg;
                }
                DE("main", new A7(DQ, DS, 0, T(DU)));
                window.setTimeout(function () {
                    var DV, DW;
                    if (DT && DT.reviews) {
                        DV = DT.reviews.review_count;
                        DW = DT.reviews.avg;
                    }
                    DF(DV, DW, DR);
                }, 0);
            }, DR);
        }

        function BH(DT, DS) {
            var DV = {}, DW = 0, DU = DT.length;
            for (var DR = 0; DR < DU; DR++) {
                var DQ = DT[DR];
                if (DQ.at) {
                    ++DW;
                    if (DV[DQ.at]) {
                        DV[DQ.at].push(DQ.id);
                    } else {
                        DV[DQ.at] = [DQ.id];
                    }
                }
            }
            for (var i in DV) {
                if (DV.hasOwnProperty(i)) {
                    C1.trackPageview("rd", {
                        locale: M("pr_locale", DS),
                        pageId: M("pr_page_id", DS),
                        merchantId: M("pr_merchant_id", DS),
                        siteId: M("pr_site_id", DS),
                        eventType: "syndication",
                        synMerchantId: i.toString(),
                        synSharedReviewIds: DV[i],
                        synReviewsOnPageCount: DW
                    });
                }
            }
        }

        function A(i) {
            return (!!M("pr_product_name", i) && !!M("pr_product_image_url", i) && !!M("pr_product_category_name", i) && !!M("pr_product_description", i));
        }

        function CE(DR) {
            var DS = {
                bn: M("pr_product_brand_name", DR),
                pid: M("pr_page_id", DR),
                pidv: M("pr_page_id_variant", DR),
                l: M("pr_locale", DR),
                n: M("pr_product_name", DR),
                d: M("pr_product_description", DR),
                pu: M("pr_product_url", DR),
                iu: M("pr_product_image_url", DR),
                pri: M("pr_product_price", DR),
                cn: M("pr_product_category_name", DR),
                is: M("pr_product_in_stock", DR),
                mi: M("pr_product_manufacturer_id", DR),
                upc: M("pr_product_upc", DR),
                atcu: M("pr_product_add_to_cart_url", DR)
            };
            var i = M("pr_site_id", DR);
            if (!!i) {
                DS.sid = i;
            } else {
                DS.mid = M("pr_merchant_id", DR);
            }
            C1.trackPageview("fp", DS);
            if (!!window.sessionStorage) {
                var DQ = e.parse(window.sessionStorage.getItem("powerreviews")) || {};
                DQ = {
                    currentProductInformation: {
                        merchant_id: M("pr_merchant_id", DR),
                        merchant_group_id: M("pr_merchant_group_id", DR),
                        site_id: M("pr_site_id", DR),
                        page_id: M("pr_page_id", DR),
                        page_id_variant: M("pr_page_id_variant", DR),
                        pr_product_brand_name: M("pr_product_brand_name", DR),
                        pr_product_name: M("pr_product_name", DR),
                        pr_product_description: M("pr_product_description", DR),
                        pr_product_url: M("pr_product_url", DR),
                        pr_product_image_url: M("pr_product_image_url", DR),
                        pr_product_price: M("pr_product_price", DR),
                        pr_product_category_name: M("pr_product_category_name", DR),
                        pr_product_in_stock: M("pr_product_in_stock", DR),
                        pr_product_manufacturer_id: M("pr_product_manufacturer_id", DR),
                        pr_product_upc: M("pr_product_upc", DR),
                        pr_product_add_to_cart_url: M("pr_product_add_to_cart_url", DR)
                    }
                };
                window.sessionStorage.setItem("powerreviews", e.stringify(DQ));
            }
        }

        function BF(DQ, i, DT, DR) {
            By.userTrackingDomain = M("pr_tracking_domain", DR);
            var DU = document.getElementById("pr-review-engine-" + DQ);
            if (DU) {
                C1.trackClickEvents(DU, "rd", {
                    locale: M("pr_locale", DR),
                    pageId: M("pr_page_id", DR),
                    merchantId: M("pr_merchant_id", DR),
                    siteId: M("pr_site_id", DR),
                    engineVersion: "2",
                    inlineSEO: DT
                });
                C1.trackVisibility(DU, "rd", {
                    eventType: "reviews-visible",
                    locale: M("pr_locale", DR),
                    pageId: M("pr_page_id", DR),
                    merchantId: M("pr_merchant_id", DR),
                    siteId: M("pr_site_id", DR),
                    engineVersion: "2",
                    inlineSEO: DT
                });
            }
            var DS = document.querySelector(".pr-attribute-ratings");
            if (DS) {
                C1.trackVisibility(DS, "rd", {
                    locale: M("pr_locale", DR),
                    pageId: M("pr_page_id", DR),
                    merchantId: M("pr_merchant_id", DR),
                    siteId: M("pr_site_id", DR),
                    engineVersion: "2",
                    inlineSEO: DT,
                    eventType: "histogram-viewed"
                });
            }
        }

        function Ck(DQ, i, DS, DR) {
            CD(DQ, i, function (DU) {
                var DT, DV;
                if (DU && DU.reviews) {
                    DT = DU.reviews.review_count;
                    DV = DU.reviews.avg;
                }
                var DW = document.getElementById("pr-review-engine-" + DQ);
                if (DW) {
                    C1.trackPageview("rd", {
                        locale: M("pr_locale", DR),
                        pageId: M("pr_page_id", DR),
                        merchantId: M("pr_merchant_id", DR),
                        siteId: M("pr_site_id", DR),
                        engineVersion: "2",
                        inlineSEO: DS,
                        reviewCount: DT,
                        starRating: DV ? DV : null,
                        visible: C1.isElementVisible(DW),
                        ct: M("pr_creation_date")
                    });
                }
            }, DR);
        }

        function B1(DR) {
            var DU = M("pr_site_id", DR);
            var DQ = [];
            if (DU || !false) {
                DQ = DQ.concat(Cv(document, "p", "pr-fb-needs-merchant"));
                DQ = DQ.concat(Cv(document, "div", "pr-fb-needs-merchant"));
            }
            if (DU) {
                DU = C5(DU);
                DQ = DQ.concat(Cv(document, "p", "pr-needs-siteid-" + DU));
                DQ = DQ.concat(Cv(document, "div", "pr-needs-siteid-" + DU));
            }
            for (var DS = 0; DS < DQ.length; DS++) {
                var DT = DQ[DS];
                DT.style.display = "";
            }
        }

        function Bv(i) {
        }

        E.display.collapseReviewPointsPanel = Bv;

        function CR(DW, DQ, DU) {
            document.getElementById("pr-filters").style.display = "none";
            document.getElementById("pr-review-filtered-count").style.display = "none";
            document.getElementById("pr-review-count").style.display = "block";
            var DS = document.querySelector(".pr-attribute-ratings").querySelector(".pr-ratings-histogram-content");
            for (var DT = 0; DT < DS.children.length; DT++) {
                var DV = DS.children[DT];
                DV.className = DV.className.replace(" pr-selected", "");
            }
            if (K) {
                p = K;
            }
            var DR = M("pr_page_id", DU);
            DR = C5(DR);
            var i = M("pr_locale", DU);
            Af(DR, i, function () {
                At(Ao, DR);
                a(1, DR, i, "sort", DQ, DU);
                C1.trackPageview("rd", {
                    locale: M("pr_locale", DU),
                    pageId: M("pr_page_id", DU),
                    merchantId: M("pr_merchant_id", DU),
                    siteId: M("pr_site_id", DU),
                    engineVersion: "2",
                    eventType: "filter-removed-all"
                });
            }, DU);
        }

        POWERREVIEWS.display.clearFilters = CR;

        function h(DW, DU, DV, Dc, DY) {
            if (!DV || !DY) {
                return;
            }
            var i = new Date();
            if (i.getTime() - Bp.getTime() > 1000) {
                for (var DS = 0; DS < DW.parentNode.children.length; DS++) {
                    var DQ = DW.parentNode.children[DS];
                    DQ.className = DQ.className.replace(" pr-selected", "");
                }
                DW.className += " pr-selected";
                var Db = this;
                var Da = document.createElement("DIV");
                Da.className = "pr-filter";
                Da.onclick = function () {
                    POWERREVIEWS.display.clearFilters(Db, DV, POWERREVIEWS.common.getOptions(DV));
                };
                var DT = document.createElement("DIV");
                DT.className = "pr-filter-remove-icon";
                var DZ = document.createElement("DIV");
                DZ.className = "pr-filter-label";
                DZ.innerHTML = CO(M("pr_locale"))[DU - 1];
                Da.appendChild(DT);
                Da.appendChild(DZ);
                document.getElementById("pr-filters-active").innerHTML = "";
                document.getElementById("pr-filters-active").appendChild(Da);
                document.getElementById("pr-filters").style.display = "block";
                Bp = i;
                var DR = M("pr_page_id", Dc);
                DR = C5(DR);
                var DX = M("pr_locale", Dc);
                Af(DR, DX, function () {
                    C1.trackPageview("rd", {
                        locale: M("pr_locale", Dc),
                        pageId: M("pr_page_id", Dc),
                        merchantId: M("pr_merchant_id", Dc),
                        siteId: M("pr_site_id", Dc),
                        engineVersion: "2",
                        eventType: "filter-applied-" + DU + "star"
                    });
                    Cl({rating: DU}, DR);
                    a(1, DR, DX, "sort", DV, Dc);
                    document.getElementById("pr-review-filtered-count").innerHTML = "Filtered to show {0} of {1} reviews".replace("{0}", p.length).replace("{1}", K.length);
                    document.getElementById("pr-review-filtered-count").style.display = "block";
                    document.getElementById("pr-review-count").style.display = "none";
                    var Dd = document.getElementById("pr-review-sort");
                    if (!window.Promise) {
                        Dd.scrollIntoView();
                    } else {
                        CZ(Dd, 500);
                    }
                }, Dc);
            }
        }

        E.display.filterReviewsByRating = h;

        function Cl(DR) {
            if (!K) {
                K = p;
            }
            var DQ = [];
            for (var i = 0; i < K.length; i++) {
                var DS = K[i];
                if (DR.rating === DS.rating) {
                    DQ.push(DS);
                }
            }
            p = DQ;
        }

        function CJ(DU, DR, DQ, i, DS) {
            var DT = new Date();
            if (DT.getTime() - Bp.getTime() > 1000) {
                Bp = DT;
                Af(DR, DQ, function () {
                    At(DU.selectedIndex, DR);
                    a(1, DR, DQ, "sort", i, DS);
                }, DS);
            }
        }

        E.display.startSort = CJ;

        function At(DR, i) {
            p.sort(Aa[DR]);
            Ao = DR;
            var DQ = document.getElementById("pr-header-" + i);
            if (DQ) {
                DQ.focus();
            }
        }

        function CV(DQ, i) {
            if (DQ.oid && i.oid) {
                return i.oid - DQ.oid;
            }
            return i.rid - DQ.rid;
        }

        Aa[Aq] = function (DQ, i) {
            if (DQ.date == i.date) {
                return CV(DQ, i);
            }
            return i.date - DQ.date;
        };
        Aa[Ai] = function (DQ, i) {
            if (i.date == DQ.date) {
                return CV(i, DQ);
            }
            return DQ.date - i.date;
        };
        Aa[P] = function (DQ, i) {
            if (i.rating == DQ.rating) {
                return CV(DQ, i);
            }
            return i.rating - DQ.rating;
        };
        Aa[Cw] = function (DQ, i) {
            if (i.rating == DQ.rating) {
                return CV(i, DQ);
            }
            return DQ.rating - i.rating;
        };
        Aa[AH] = function (DQ, i) {
            if (i.helpfulScore == DQ.helpfulScore) {
                return CV(DQ, i);
            }
            return i.helpfulScore - DQ.helpfulScore;
        };
        Aa[B6] = function (DQ, i) {
            if (i.helpfulScore == DQ.helpfulScore) {
                return CV(i, DQ);
            }
            return DQ.helpfulScore - i.helpfulScore;
        };

        function Bb(DT, DR, DQ, i, DS, DU) {
            CD(DR, DQ, function (DV) {
                var DW = [DT];
                w(DR, DQ, DW, function () {
                    var DX = 0;
                    if (DV.reviews) {
                        try {
                            DX = p.length;
                        } catch (DY) {
                            DX = DV.reviews.review_count;
                        }
                        BH(L[DR + "-" + DQ + "-" + DT], DS);
                    }
                    BE("pr-contents-" + DR, Bc(L[DR + "-" + DQ + "-" + DT], DR, DQ, DV.name, DV.vNames, DV.brand, DX, M("pr_reviews_per_page", DS), 1, "#pr-header-" + DR, "#pr-header-" + DR, false, i, DS), DU);
                }, DS);
            }, DS);
        }

        function S(DT, DR, DQ, i, DS) {
            a(DT, DR, DQ, "page", i, DS);
        }

        function a(DT, DR, DQ, DU, i, DS) {
            Af(DR, DQ, function () {
                if (Ao == null) {
                    At(Aq, DR);
                }
                CD(DR, DQ, function (DV) {
                    var Da = M("pr_reviews_per_page", DS);
                    var Dd = (DT - 1) * Da;
                    var DY = Dd + Da - 1;
                    var DZ;
                    try {
                        DZ = p.length - 1;
                    } catch (Db) {
                        DZ = DV.reviews.review_count - 1;
                    }
                    if (DY > DZ) {
                        DY = DZ;
                    }
                    var DW = [];
                    var De = {};
                    for (var DX = Dd; DX <= DY; DX++) {
                        var Dc = p[DX].batch;
                        if (!De[Dc]) {
                            DW.push(Dc);
                            De[Dc] = true;
                        }
                    }
                    w(DR, DQ, DW, function () {
                        var Dg = [];
                        for (var Df = Dd; Df <= DY; Df++) {
                            Dg.push(AI[p[Df].rid]);
                        }
                        BH(Dg, DS);
                        setTimeout(function () {
                            BE("pr-contents-" + C5(DR), Bc(Dg, DR, DQ, DV.name, DV.vNames, DV.brand, p.length, Da, DT, "#pr-header-" + DR, "#pr-header-" + DR, false, i, DS), function () {
                                B1();
                            });
                        }, 0);
                    }, DS);
                }, DS);
            }, DS);
            m({"type": DU}, DS);
        }

        E.display.getReviewsFromMeta = S;

        function O(DQ, DV, DR, i, DT, DX, DW) {
            var DS = "pr-header-" + DQ;
            var DU = Cm(DQ, DX);
            if (DR > 0) {
                Cq(DQ, DV, function (DY) {
                    if (DY) {
                        BE(DS, Cp(DR, i, DU, DY, DQ, DV, DT, DX), DW);
                    }
                }, DX);
            } else {
                BE(DS, Cp(DR, i, DU, null, DQ, DV, DT, DX), DW);
            }
        }

        function AW(DQ, DS, i, DR) {
            var DT = "Thank you for your feedback.  Please note that only your first vote will be counted.";
            if (!A0[DQ] || A0[DQ] == "undefined") {
                u(M("pr_js_controller_url", DR) + "?command=helpfulVote&reviewId=" + DQ + "&voteType=" + DS);
                A0[DQ] = 1;
            } else {
                DT = "You may only submit one vote per review.";
            }
            BE("review_feedback" + DQ, DT);
        }

        E.display.submitHelpfulVote = AW;

        function b(DR, DQ, i, DS) {
            if (!I[DR] || I[DR] == "undefined") {
                var DT = document.getElementById("error_div" + DR);
                DT.innerHTML = BS(DR, DQ, i, DS);
                document.getElementById("error_div" + DR).style.display = "block";
            } else {
                BE("review_feedback" + DR, "You have already notified us of an error for this review.");
            }
        }

        E.display.launchErrorDiv = b;

        function Ar(i) {
            document.getElementById("error_div" + i).style.display = "none";
        }

        function Bk(DQ, i, DS) {
            var DU = BK("error_radio" + DQ);
            var DW = document.getElementById("error_comments" + DQ).value;
            DW = DW.substring(0, 256);
            var DR = AT(document.getElementById("error_contact_email" + DQ).value);
            var DV = document.location.href;
            if (DV && typeof DV != "undefined") {
                var DT = DV.split("/", 4)[2];
                DW += "\n[" + DT + "]";
            }
            if (!/.+@.+/.test(DR)) {
                alert("Email Address is required when flagging a review");
            } else {
                if (!DU) {
                    alert("Please select the reason you are flagging this review");
                } else {
                    u(M("pr_js_controller_url", DS) + "?command=helpfulVote&reviewId=" + DQ + "&merchantId=" + M("pr_merchant_id", DS) + "&voteType=" + DU + "&errorComments=" + BG(DW) + "&errorContactEmail=" + BG(DR));
                    BE("review_feedback" + DQ, "Thank you for notifying us of this error.");
                    A0[DQ] = 1;
                    I[DQ] = 1;
                    Ar(DQ);
                }
            }
        }

        E.display.submitError = Bk;

        function Ad(i) {
            Ar(i);
        }

        E.display.cancelError = Ad;

        function Ay(DS, DR) {
            if (typeof DS == "function" && R(DR)) {
                var DQ = M("pr_page_id", DR);
                var i = C5(DQ);
                CD(i, M("pr_locale", DR), function (DT) {
                    if (DT && DT.reviews) {
                        DS(new A7(DQ, DT.reviews.review_count, 0, T(DT.reviews.avg)));
                    } else {
                        DS(new A7(DQ, 0, 0, 0));
                    }
                }, DR);
            }
        }

        E.display.prData = Ay;

        function CA(i) {
            BM.push(i);
        }

        E.display.registerCallback = CA;

        function z() {
            return {
                "offsetY": document.body.scrollTop || document.documentElement.scrollTop,
                "viewportWidth": document.getElementsByTagName("body")[0].clientWidth
            };
        }

        function BD(i, DU, DQ, DV, DT) {
            B8(i);
            var DS = document.getElementById("pr-modal-" + i);
            if (DQ) {
                if (DQ.ctx && DV) {
                    switch (DQ.ctx) {
                        case"top":
                            DV.parentNode.insertBefore(DS, DV);
                            DS.style.top = "-" + DQ.h + "px";
                            break;
                        case"bottom":
                            A9(DV, DS);
                            break;
                        case"custom":
                            DV.parentNode.insertBefore(DS, DV);
                            if (DQ.t && DQ.l) {
                                DS.style.top = DQ.t + "px";
                                DS.style.left = DQ.l + "px";
                            }
                            break;
                    }
                } else {
                    var DR = z();
                    DS.style.left = ((DR.viewportWidth - DQ.w) / 2) + "px";
                    DS.style.top = (DR.offsetY + 100) + "px";
                }
                DS.style.width = DQ.w + "px";
                DS.style.height = DQ.h + "px";
            }
            BE("pr-modal-container-" + i, DU, function () {
                DK(DS, "pr-hidden");
                var DW = document.getElementById("pr-modal-container-" + i);
                if (DQ) {
                    DW.style.width = (DQ.w - 20) + "px";
                    DW.style.height = (DQ.h - 20) + "px";
                }
                if (DT) {
                    DT();
                }
            });
        }

        function BJ(i) {
            DI(document.getElementById("pr-modal-" + i), "pr-hidden");
        }

        E.display.hideModal = BJ;

        function B8(DQ) {
            if (POWERREVIEWS.widget && POWERREVIEWS.widget.instances) {
                for (var DS = 0; DS < POWERREVIEWS.widget.instances.length; DS++) {
                    if (POWERREVIEWS.widget.instances[DS]) {
                        if (POWERREVIEWS.widget.instances[DS].config.widget_type == "profile") {
                            POWERREVIEWS.widget.instances[DS].closeProfileModal(100);
                        }
                    }
                }
            }
            var DT = document.getElementById("pr-modal-" + DQ);
            if (!DT) {
                DT = document.createElement("div");
                DT.id = "pr-modal-" + DQ;
                DT.className = "pr-base-modal pr-hidden";
                DT.innerHTML = CL(DQ);
            }
            document.getElementsByTagName("body")[0].appendChild(DT);
            var DR = document.getElementById("pr-modal-container-" + DQ);
            DT.style.height = "auto";
            DT.style.width = "auto";
            DT.style.top = 0;
            DT.style.bottom = 0;
            DT.style.left = 0;
            DT.style.right = 0;
            DR.style.height = "auto";
            DR.style.width = "auto";
            DI(DT, "pr-hidden");
        }

        function CK(DR, DV) {
            B8(DR);
            var DS = document.getElementById(DV).innerHTML;
            var DQ = document.getElementById("pr-modal-" + DR);
            var i = Cv(document, "div", "pr-review-faceoff-review-wrapper")[0];
            DQ.style.width = (i.scrollWidth - 20) + "px";
            DQ.style.height = (i.offsetHeight + 47) + "px";
            DQ.style.left = (i.offsetLeft + 10) + "px";
            DQ.style.top = (i.offsetTop - 40) + "px";
            var DT = {
                w: i.scrollWidth - 20,
                h: i.offsetHeight + 47,
                ctx: "custom",
                t: i.offsetTop - 40,
                l: i.offsetLeft + 10
            };
            var DU = Cv(document, "div", "pr-review-faceoff")[0];
            BD(DR, DS, DT, DU);
        }

        E.display.displayFaceoffModal = CK;

        function Bg(DR, DQ, DT, DU, DV, DS) {
            DU = {"w": 545, "h": 275};
            var i = DT["r"] || false;
            Bf(DR, DQ, i, DU, DV, DS);
        }

        E.display.showFollowProductModalWithHash = Bg;

        function D(DQ, i, DS, DT, DR) {
            Bf(DQ, i, true, DS, DT, DR);
        }

        E.display.showFollowProductModal = D;

        function Bf(DS, DT, DY, DQ, DW, DX) {
            var DR = M("pr_page_id", DX);
            var DV = "";
            var DU = "";
            var i = function () {
                var DZ = AD(DR, DS, DV, DU, DT, DX);
                BD(DS, DZ, DQ, DW, function () {
                    Cy(DS, DT);
                });
            };
            if (DY) {
                Cq(DS, DT, function (DZ) {
                    if (DZ) {
                        DV = DZ.r;
                        DU = DZ.i;
                    }
                    i();
                }, DX);
            } else {
                i();
            }
        }

        function AS(DQ, i, DS, DT, DR) {
            DS = {"w": 545, "h": 275};
            Cq(DQ, i, function (DV) {
                categoryInfo = Cz(DV, i, DR);
                var DU = Bu(categoryInfo, i, DR, DQ);
                BD(DQ, DU, DS, DT, function () {
                    Cy(DQ, i);
                });
            }, DR);
        }

        E.display.showFollowProductCategoryModal = AS;

        function BY(DV, DU) {
            var DT = document.getElementById(DU.target);
            var DS = e.parse(DT.getAttribute("prdata"));
            DS.keyValue = DU.keyValue;
            DT.setAttribute("prdata", e.stringify(DS));
            var DR = Cv(document.getElementById("pr-fb-likebtn-wrapper-" + DU.locale + "-" + DU.pageId), "iframe", "pr-fb-likebtn");
            for (var DQ = 0; DQ < DR.length; DQ++) {
                DK(DR[DQ], "pr-hidden");
                DI(DR[DQ], "pr-hidden");
            }
            if (!!document.getElementById(DV)) {
                DK(document.getElementById(DV), "pr-hidden");
            }
        }

        E.display.toggleFbLikeButton = BY;

        function DE(DS, DR) {
            for (var DQ = 0; DQ < BM.length; DQ++) {
                BM[DQ](DS, DR);
            }
        }

        function Bs(DS) {
            var DQ = {
                canonicalGroupSet: {},
                histogramDisplayGroupList: [],
                subratingsGroupList: [],
                otherGroupList: []
            };
            if (DS) {
                if (DS.g) {
                    for (var DR = 0; DR < DS.g.length; DR++) {
                        var DT = DS.g[DR];
                        if (DT.k == "pros" || DT.k == "cons" || DT.k == "bestuses") {
                            DQ.canonicalGroupSet[DT.k] = DT;
                        } else {
                            if (DT.a) {
                                DQ.histogramDisplayGroupList.push(DT);
                            } else {
                                DQ.otherGroupList.push(DT);
                            }
                        }
                    }
                }
                DQ.subratingGroupList = DS.ar || [];
            }
            return DQ;
        }

        function Cz(DQ, Dc, De) {
            var Df = [];
            if (DQ && DQ.c && DQ.c.n && DQ.c.c) {
                var DW = DQ.c.n;
                var DY = DQ.c.c;
                var DX = ":";
                var DU = new RegExp(DX + "$");
                var Da = DW.replace(DU, "").split(DX);
                var i = DY.replace(DU, "").split(DX);
                if (Da.length == i.length) {
                    var DV = Da.length;
                    var Dd = Math.min(DV, 3);
                    var DS = DV - Dd;
                    for (var DZ = DS; DZ < DV; DZ++) {
                        var Db = Da[DZ];
                        var DT = i.slice(0, DZ + 1).join(DX) + DX;
                        var DR = AP(DT, Dc, De);
                        Df.push({"label": Db, "url": DR, "code": DT});
                    }
                }
            }
            return Df;
        }

        function CQ(DS, i, DR) {
            var DQ = Cz(DS, i, DR);
            return DQ.length > 0;
        }

        function Au(DR, i, DQ) {
            var DS = Aw(DQ);
            var DT = BG(M("pr_site_id", DQ) || "-");
            return DS + "product/" + i + "/" + M("pr_merchant_group_id", DQ) + "/" + DT + "/" + BG(DR);
        }

        function AP(DT, i, DQ) {
            var DR = Aw(DQ);
            var DS = BG(M("pr_site_id", DQ) || "-");
            return DR + "productCategory/" + i + "/" + M("pr_merchant_group_id", DQ) + "/" + DS + "/" + AO(DT);
        }

        function Cp(i, DX, DQ, Dm, Dc, Dk, Dp, DS) {
            var DZ = [];
            var Dj = Z(DS);
            var Dl = {describeyourself: "Reviewer Profile"};
            var Dh = Bs(Dm);
            var DY = Dh.canonicalGroupSet;
            var Df = Dh.histogramDisplayGroupList;
            var DU = Dh.subratingGroupList;
            var DV = Dh.otherGroupList;
            var Db = 0;
            for (CF = 0; CF < DX.length; CF++) {
                Db = (DX[CF] + Db);
            }
            var DT = M("pr_locale_transitions", DS);
            var De = "All";
            var Do = (i == 1) ? "based on {0} review" : "based on {0} reviews";
            var Dr = "count";
            DZ.push('<div class="pr-snapshot">');
            if (i > 0) {
                DZ.push('<div class="pr-review-social-bar pr-fb-needs-merchant" style="display:none;"><div class="pr-clear"></div></div>');
            }
            DZ.push('<a name="ReviewHeader"></a><div class="pr-snapshot-head"><div class="pr-snapshot-head-wrapper pr-float-left"><p class="pr-snapshot-title">');
            DZ.push("REVIEW SNAPSHOT&reg;");
            DZ.push("</p>");
            if (Q(DS).cobranded) {
                DZ.push('<a href="#" class="pr-snapshot-cobrand" data-pr-event="snapshot-cobrand-link-pre" onclick="POWERREVIEWS.common.showSmallPopup(\'');
                DZ.push("https://www.powerreviews.com/legal/index_en_US.html");
                DZ.push("', 410, 420); return false;\">");
                DZ.push("by PowerReviews");
                DZ.push("</a>");
            }
            DZ.push("</div>");
            var Dd = DT[Dk];
            if (Dd && DQ && DQ[Dd] && BA && BA[Dd] && BA[Dd][Dk]) {
                var Dn = DQ[Dd];
                var Di = BA[Dd][Dk];
                DZ.push('<div class="pr-snapshot-change-locale-wrapper"><a href="javascript:;" class="pr-snapshot-change-locale" onclick="POWERREVIEWS.display.displayInitialReviewBoxWrapper(\'');
                DZ.push(Dc);
                DZ.push("', '");
                DZ.push(Dd);
                DZ.push("', '");
                DZ.push(Dp);
                DZ.push("', POWERREVIEWS.common.getOptions('");
                DZ.push(Dp);
                DZ.push("'));\">");
                if (Dn == 1) {
                    DZ.push(("Show {0} {1} review" || "").replace("{0}", Dn).replace("{1}", Di));
                } else {
                    DZ.push(("Show {0} {1} reviews" || "").replace("{0}", Dn).replace("{1}", Di));
                }
                DZ.push("</a></div>");
            }
            DZ.push('<div class="pr-clear"></div></div><div class="pr-snapshot-body">');
            if (i > 0) {
                DZ.push('<div class="pr-snapshot-body-wrapper"><div class="pr-snapshot-rating-wrapper hreview-aggregate">');
                if (Dm.r) {
                    DZ.push('<div class="pr-snapshot-product-name item">');
                    if (Dm.br) {
                        DZ.push('<span class="pr-brand">');
                        DZ.push(Dm.br);
                        DZ.push("</span>");
                    }
                    DZ.push('<span class="fn">');
                    DZ.push(Dm.r);
                    DZ.push("</span></div>");
                }
                DZ.push('<div class="pr-snapshot-rating rating"><div class="pr-stars ');
                DZ.push(BN[Dm.a].large);
                DZ.push('" style="background-position: 0px ');
                DZ.push(Dm.a * -46);
                DZ.push('px;">&nbsp;</div><span class="pr-rating pr-rounded average">');
                DZ.push((Dm.d * 10) % 10 == 0 ? Dm.d + ".0" : Dm.d);
                DZ.push('</span><p class="pr-snapshot-average-based-on-text">(');
                DZ.push((Do || "").replace("{0}", '<span  class="' + Dr + '">' + i + "</span>"));
                DZ.push(")</p>");
                if (Db > 0) {
                    DZ.push("<div id=\"pr-snapshot-histogram\"><a tabindex=\"0\" data-pr-event=\"snapshot-histogram-link\" href=\"#\" id=\"pr-snapshot-histogram-lnk\" onclick=\"return false\" onmouseover=\"POWERREVIEWS.common.togglePopOut({'target':'pr-snapshot-histogram-container'},'show', this, event)\" onmouseout=\"POWERREVIEWS.common.togglePopOut({'link':'pr-snapshot-histogram-lnk','target':'pr-snapshot-histogram-container'},'hide', this, event)\" onfocus=\"POWERREVIEWS.common.togglePopOut({'target':'pr-snapshot-histogram-container'},'show', this, event)\" onblur=\"POWERREVIEWS.common.togglePopOut({'link':'pr-snapshot-histogram-lnk','target':'pr-snapshot-histogram-container'},'hide', this, event)\"><img id=\"pr-snapshot-histogram-lnk-img\" src=\"");
                    DZ.push(Dj);
                    DZ.push("/engine/images/icon_popout.gif\" onclick=\"return false\" onmouseover=\"POWERREVIEWS.common.togglePopOut({'target':'pr-snapshot-histogram-container'},'show', this, event)\" onmouseout=\"POWERREVIEWS.common.togglePopOut({'link':'pr-snapshot-histogram-lnk-img','target':'pr-snapshot-histogram-container'},'hide', this, event)\"/></a><div id=\"pr-snapshot-histogram-wrapper\"><div id=\"pr-snapshot-histogram-container\" class=\"pr-closed\" onmouseover=\"POWERREVIEWS.common.togglePopOut({'target':'pr-snapshot-histogram-container'},'show', this, event)\" onmouseout=\"POWERREVIEWS.common.togglePopOut({'link':'pr-snapshot-histogram-lnk','target':'pr-snapshot-histogram-container'},'hide', this, event)\"><p id=\"pr-snapshot-histogram-header\"><span>");
                    DZ.push("Ratings Distribution");
                    DZ.push("</span></p>");
                    DZ.push(AJ(DX, Dk, Dp, DS, false));
                    DZ.push("</div></div></div>");
                }
                DZ.push('</div><div class="pr-clear"></div>');
                if (Dm.b || Dm.b == 0) {
                    DZ.push('<div class="pr-snapshot-consensus"><p class="pr-snapshot-consensus-value pr-rounded">');
                    DZ.push(Math.round(100 * Dm.b));
                    DZ.push('%</p> <p class="pr-snapshot-consensus-text">');
                    DZ.push("of respondents would recommend this to a friend.");
                    DZ.push("</p></div>");
                }
                DZ.push("</div>");
                if (DY.pros || DY.cons || DY.bestuses || Df.length || DU.length || DV.length) {
                    DZ.push('<div class="pr-review-points"><div class="pr-review-points-attr-wrapper"><div class="pr-attribute-group pr-rounded pr-attribute-ratings" style="display:none"><div class="pr-attribute-key" onclick="POWERREVIEWS.display.collapseReviewPointsPanel(this)"><div class="pr-attribute-label pr-attribute-label-rating"><p class="pr-attribute-label-text">');
                    DZ.push("Ratings Distribution");
                    DZ.push('</p><div class="pr-attribute-collapse"></div><div class="pr-clear"></div></div></div><div class="pr-attribute-value" style="padding:15px;">');
                    DZ.push(AJ(DX, Dk, Dp, DS, true));
                    DZ.push('</div></div><div class="pr-attribute-group pr-rounded pr-attribute-pros');
                    DZ.push(DY.pros ? "" : " pr-empty");
                    DZ.push('"><div class="pr-attribute-key" onclick="POWERREVIEWS.display.collapseReviewPointsPanel(this)"><div class="pr-attribute-label pr-attribute-label-pros"><p class="pr-attribute-label-text">');
                    DZ.push("Pros");
                    DZ.push('</p><div class="pr-attribute-collapse"></div><div class="pr-clear"></div></div></div><div class="pr-attribute-value">');
                    if (!!DY.pros && DY.pros.v.length > 0) {
                        DZ.push('<ul class="pr-attribute-value-list pr-snapshot-attribute-value-list">');
                        var DW = DY.pros;
                        if (DW) {
                            for (var Da = 0; Da < DW.v.length; Da++) {
                                var Dg = DW.v[Da];
                                DZ.push("<li>");
                                DZ.push(Dg.n);
                                DZ.push("&nbsp;(");
                                DZ.push(Dg.c);
                                DZ.push(")</li>");
                            }
                        }
                        DZ.push("</ul>");
                    } else {
                        DZ.push("<div class='pr-attribute-value-list-empty'>");
                        DZ.push("No");
                        DZ.push(" ");
                        DZ.push("Pros");
                        DZ.push("</div>");
                    }
                    DZ.push('</div></div><div class="pr-attribute-group pr-rounded pr-attribute-cons');
                    DZ.push(DY.cons ? "" : " pr-empty");
                    DZ.push('"><div class="pr-attribute-key" onclick="POWERREVIEWS.display.collapseReviewPointsPanel(this)"><div class="pr-attribute-label pr-attribute-label-cons"><p class="pr-attribute-label-text">');
                    DZ.push("Cons");
                    DZ.push('</p><div class="pr-attribute-collapse"></div><div class="pr-clear"></div></div></div><div class="pr-attribute-value">');
                    if (!!DY.cons && DY.cons.v.length > 0) {
                        DZ.push('<ul class="pr-attribute-value-list pr-snapshot-attribute-value-list">');
                        var DW = DY.cons;
                        if (DW) {
                            for (var Da = 0; Da < DW.v.length; Da++) {
                                var Dg = DW.v[Da];
                                DZ.push("<li>");
                                DZ.push(Dg.n);
                                DZ.push("&nbsp;(");
                                DZ.push(Dg.c);
                                DZ.push(")</li>");
                            }
                        }
                        DZ.push("</ul>");
                    } else {
                        DZ.push("<div class='pr-attribute-value-list-empty'>");
                        DZ.push("No");
                        DZ.push(" ");
                        DZ.push("Cons");
                        DZ.push("</div>");
                    }
                    DZ.push('</div></div><div class="pr-attribute-group pr-rounded pr-attribute-bestuses');
                    DZ.push(DY.bestuses ? "" : " pr-empty");
                    DZ.push(' pr-last"><div class="pr-attribute-key" onclick="POWERREVIEWS.display.collapseReviewPointsPanel(this)"><div class="pr-attribute-label pr-attribute-label-bestuses"><p class="pr-attribute-label-text">');
                    DZ.push("Best Uses");
                    DZ.push('</p><div class="pr-attribute-collapse"></div><div class="pr-clear"></div></div></div><div class="pr-attribute-value">');
                    if (!!DY.bestuses && DY.bestuses.v.length > 0) {
                        DZ.push('<ul class="pr-attribute-value-list pr-snapshot-attribute-value-list">');
                        var DW = DY.bestuses;
                        if (DW) {
                            for (var Da = 0; Da < DW.v.length; Da++) {
                                var Dg = DW.v[Da];
                                DZ.push("<li>");
                                DZ.push(Dg.n);
                                DZ.push("&nbsp;(");
                                DZ.push(Dg.c);
                                DZ.push(")</li>");
                            }
                        }
                        DZ.push("</ul>");
                    } else {
                        DZ.push("<div class='pr-attribute-value-list-empty'>");
                        DZ.push("No");
                        DZ.push(" ");
                        DZ.push("Best Uses");
                        DZ.push("</div>");
                    }
                    DZ.push('</div></div><div class="pr-clear"></div></div></div>');
                    if (Df.length) {
                        DZ.push(AV(Df, Dk, DS));
                    }
                    if (DU.length) {
                        DZ.push(Cj(DU, Dk, DS));
                    }
                    DZ.push('<div class="pr-other-attributes"><ul class="pr-other-attributes-list">');
                    for (var Dq = 0; Dq < DV.length; Dq++) {
                        var DW = DV[Dq];
                        var DR = [];
                        for (var Da = 0; Da < DW.v.length; Da++) {
                            var Dg = DW.v[Da];
                            DR.push(Dg.n + "&nbsp;(" + Dg.c + ")");
                        }
                        DZ.push('<li class="pr-other-attributes-group pr-other-attribute-');
                        DZ.push(DW.k);
                        DZ.push('"><ul><li class="pr-other-attribute-label">');
                        DZ.push(Dl[DW.k] || DW.n);
                        DZ.push(':</li><li class="pr-other-attribute-value">');
                        DZ.push(DR.join(", "));
                        DZ.push("</li></ul></li>");
                    }
                    DZ.push('<li class="pr-clear"></li></ul></div>');
                }
                DZ.push('<div id="pr-snapshot-footer-');
                DZ.push(Dc);
                DZ.push('" class="pr-snapshot-footer" style="display:none"><a href="#" id="write-review-');
                DZ.push(Dc);
                DZ.push('" class="pr-write-review-link" data-pr-event="snapshot-write-review"><div class="pr-snapshot-write-review"><span>');
                DZ.push("Write a Review");
                DZ.push("</span></div></a>");
                if (Y && Y["review"]) {
                    DZ.push('<div class="pr-snapshot-write-review-social-loyalty">');
                    DZ.push("Share your opinion, earn points");
                    DZ.push("</div>");
                }
                DZ.push('<div class="pr-clear"></div></div>');
            } else {
                DZ.push('<div class="pr-snapshot-body-wrapper"><div id="pr-snapshot-footer-');
                DZ.push(Dc);
                DZ.push('" class="pr-snapshot-footer" style="display:none">                    <p class="pr-snapshot-no-ratings">');
                DZ.push("Not yet rated. Be the first to");
                DZ.push(' <a href="#" id="write-review-');
                DZ.push(Dc);
                DZ.push('" data-pr-event="snapshot-write-review" class="pr-write-review-link">');
                DZ.push("Write a Review");
                DZ.push("</a>");
                if (Y && Y["first_review"]) {
                    DZ.push("&nbsp;");
                    DZ.push("(earn bonus points)");
                }
                DZ.push('</p><div class="pr-clear"></div></div>');
            }
            DZ.push("</div></div>");
            if (Dm && Dm.fo && false) {
                DZ.push('<div id="pr-review-faceoff-');
                DZ.push(Dc);
                DZ.push('"  class="pr-review-faceoff"><div class="pr-review-faceoff-review-wrapper"><div id="pr-review-faceoff-positive-');
                DZ.push(Dc);
                DZ.push('" class="pr-review-faceoff-review pr-review-faceoff-review-positive"><div class="pr-review-faceoff-container"><p class="pr-review-faceoff-label">');
                DZ.push("Most Liked Positive Review");
                DZ.push('</p><div class="pr-review-faceoff-review-content"><div class="pr-stars ');
                DZ.push(BN[Dm.fo.f2.r.r].large);
                DZ.push('" style="background-position: 0px ');
                DZ.push(Dm.fo.f2.r.r * -46);
                DZ.push('px;">&nbsp;</div><p class="pr-review-faceoff-title">');
                DZ.push(Dm.fo.f2.r.h);
                DZ.push('</p><p class="pr-review-faceoff-review">');
                if (Dm.fo.f2.cf) {
                    if (Dm.fo.f2.r.l == "jp_JP") {
                        DZ.push(AC(Dm.fo.f2.r.p, 0, Dm.fo.f2.cf, true));
                    } else {
                        DZ.push(AX(Dm.fo.f2.r.p, 0, Dm.fo.f2.cf, true));
                    }
                    DZ.push('<a data-pr-event="faceoff-positive-link" class="pr-review-faceoff-readcomplete" href="#" onclick="POWERREVIEWS.display.displayFaceoffModal(\'');
                    DZ.push(Dc);
                    DZ.push("','pr-review-faceoff-positive-");
                    DZ.push(Dc);
                    DZ.push("'); return false\">");
                    DZ.push("Read complete review");
                    DZ.push("</a>");
                } else {
                    DZ.push(Dm.fo.f2.r.p);
                }
                DZ.push('</p><p class="pr-review-faceoff-review-full">');
                DZ.push(Dm.fo.f2.r.p);
                DZ.push('</p></div></div></div><div class="pr-review-faceoff-img"><p class="pr-review-faceoff-img-txt">');
                DZ.push("VS");
                DZ.push('</p></div><div id="pr-review-faceoff-negative-');
                DZ.push(Dc);
                DZ.push('" class="pr-review-faceoff-review pr-review-faceoff-review-negative"><div class="pr-review-faceoff-container"><p class="pr-review-faceoff-label">');
                DZ.push("Most Liked Negative Review");
                DZ.push('</p><div class="pr-review-faceoff-review-content"><div class="pr-stars ');
                DZ.push(BN[Dm.fo.f1.r.r].large);
                DZ.push('" style="background-position: 0px ');
                DZ.push(Dm.fo.f1.r.r * -46);
                DZ.push('px;">&nbsp;</div><p class="pr-review-faceoff-title">');
                DZ.push(Dm.fo.f1.r.h);
                DZ.push('</p><p class="pr-review-faceoff-review">');
                if (Dm.fo.f1.cf) {
                    if (Dm.fo.f1.r.l == "jp_JP") {
                        DZ.push(AC(Dm.fo.f1.r.p, 0, Dm.fo.f1.cf, true));
                    } else {
                        DZ.push(AX(Dm.fo.f1.r.p, 0, Dm.fo.f1.cf, true));
                    }
                    DZ.push('<a data-pr-event="faceoff-negative-link" class="pr-review-faceoff-readcomplete" href="#" onclick="POWERREVIEWS.display.displayFaceoffModal(\'');
                    DZ.push(Dc);
                    DZ.push("','pr-review-faceoff-negative-");
                    DZ.push(Dc);
                    DZ.push("'); return false\">");
                    DZ.push("Read complete review");
                    DZ.push("</a>");
                } else {
                    DZ.push(Dm.fo.f1.r.p);
                }
                DZ.push('</p><p class="pr-review-faceoff-review-full">');
                DZ.push(Dm.fo.f1.r.p);
                DZ.push('</p></div></div></div><div class="pr-clear"></div></div></div>');
            }
            DZ.push("</div>");
            if (i > 0) {
                DZ.push('<div id="pr-review-sort" class="pr-review-sort"><div class="pr-review-sort-wrapper"><p id="pr-review-filtered-count" class="pr-review-count" style="display:none"></p>');
                if (i == 1) {
                    DZ.push('<p id="pr-review-count" class="pr-review-count">');
                    DZ.push("Reviewed by 1 customer");
                    DZ.push("</p>");
                } else {
                    if (i > 1) {
                        DZ.push('<p id="pr-review-count" class="pr-review-count">');
                        DZ.push(("Reviewed by {0} customers" || "").replace("{0}", i));
                        DZ.push('</p><div class="pr-review-sort-box"><label for="pr-sort-reviews" class="pr-review-sort-by">');
                        DZ.push("Sort by");
                        DZ.push('</label><select id="pr-sort-reviews" onchange="POWERREVIEWS.display.startSort(this, \'');
                        DZ.push(Dc);
                        DZ.push("', '");
                        DZ.push(Dk);
                        DZ.push("', '");
                        DZ.push(Dp);
                        DZ.push("', POWERREVIEWS.common.getOptions('");
                        DZ.push(Dp);
                        DZ.push('\'));"><option value="date_new" selected="true">');
                        DZ.push("Newest");
                        DZ.push('</option><option value="date_old">');
                        DZ.push("Oldest");
                        DZ.push('</option><option value="rating_high">');
                        DZ.push("Highest rating");
                        DZ.push('</option><option value="rating_low">');
                        DZ.push("Lowest rating");
                        DZ.push('</option><option value="helpful_high">');
                        DZ.push("Most helpful");
                        DZ.push('</option><option value="helpful_low">');
                        DZ.push("Least helpful");
                        DZ.push("</option></select></div>");
                    }
                }
                DZ.push('<div class="pr-clear"></div></div></div>');
            }
            DZ.push('<!-- ilkj --><div id="pr-filters" class="pr-filters" style="display:none"><div class="pr-filters-wrapper"><div id="pr-filters-active" class="pr-filters-active"></div><div class="pr-filter-clear"><div class="pr-filter-label"><a href="#" onclick="POWERREVIEWS.display.clearFilters(null,  \'');
            DZ.push(Dp);
            DZ.push("', POWERREVIEWS.common.getOptions('");
            DZ.push(Dp);
            DZ.push('\')); return false;">Clear all filters</a></div></div><div class="pr-clear"></div></div></div>');
            return DZ.join("");
        }

        E.display.processRollupTemplate = Cp;

        function Bc(Dn, EE, Dj, Dq, D4, Dm, Dp, DT, DW, Ds, DQ, D7, Dt, Do) {
            var De = [];
            var Dh = (DW - 1) * DT;
            var DU = Dh + DT - 1;
            if (DU > Dp - 1) {
                DU = Dp - 1;
            }
            var EF = M("pr_back_to_top_link", Do);
            var D6 = Z(Do);
            var ED = AU(M("pr_badge_definitions_url", Do), "~~~LOCALE~~~", Dj);
            var Dg = ["Got it? Rate it.", "Not good", "Needs that special something", "Average, ordinary", "That's good stuff", "Perfect. It doesn't get any better"];
            var Dr = {
                "Yes": "Yes, I would recommend this to a friend",
                "No": "No, I would not recommend this to a friend"
            };
            var D0 = "All";
            De.push('<div class="pr-contents-wrapper">');
            if (!D7) {
                De.push('<div class="pr-pagination-top"><div class="pr-page-count-wrapper"><p class="pr-page-count">');
                if (Dh == DU) {
                    De.push("Displaying review");
                    De.push(" <strong>");
                    De.push((Dh + 1));
                    De.push("</strong>");
                } else {
                    De.push("Displaying reviews");
                    De.push(" <strong>");
                    De.push((Dh + 1) + "-" + (DU + 1));
                    De.push("</strong>");
                }
                De.push('</p><p class="pr-nav-back-to-top"><a href="');
                De.push(EF);
                De.push('" name="pr-header-back-to-top-link" data-pr-event="header-back-to-top-link">');
                De.push("Back to top");
                De.push("</a></p></div>");
                if (Dp > DT) {
                    De.push('<div class="pr-page-nav-wrapper"><p class="pr-page-nav"><span class="pr-page-prev">');
                    if (Dh > 0) {
                        De.push('<a data-pr-event="header-page-prev-link" onclick="POWERREVIEWS.display.getReviewsFromMeta(');
                        De.push(DW - 1);
                        De.push(", '");
                        De.push(EE);
                        De.push("', '");
                        De.push(Dj);
                        De.push("', '");
                        De.push(Dt);
                        De.push("', POWERREVIEWS.common.getOptions('");
                        De.push(Dt);
                        De.push('\')); return false;" href="');
                        De.push(Ds.replace("~~~REVIEW_PAGE~~~", DW - 1));
                        De.push('">&laquo; ');
                        De.push("Previous");
                        De.push("</a>");
                    } else {
                        De.push("Previous");
                    }
                    De.push('</span><span class="pr-divider"> | </span><span class="pr-page-next">');
                    if (DU < Dp - 1) {
                        De.push('<a data-pr-event="header-page-next-link" onclick="POWERREVIEWS.display.getReviewsFromMeta(');
                        De.push(DW + 1);
                        De.push(", '");
                        De.push(EE);
                        De.push("', '");
                        De.push(Dj);
                        De.push("', '");
                        De.push(Dt);
                        De.push("', POWERREVIEWS.common.getOptions('");
                        De.push(Dt);
                        De.push('\')); return false;" href="');
                        De.push(DQ.replace("~~~REVIEW_PAGE~~~", DW + 1));
                        De.push('">');
                        De.push("Next");
                        De.push(" &raquo;</a>");
                    } else {
                        De.push("Next");
                    }
                    De.push("</span></p></div>");
                }
                De.push('<div class="pr-clear"></div></div>');
            }
            for (var Du = 0; Du < Dn.length; Du++) {
                var DX = Dn[Du];
                var D8 = {};
                var Dx = false;
                if (DX.g) {
                    for (var EB = 0; EB < DX.g.length; EB++) {
                        var Dc = DX.g[EB].k;
                        D8[Dc] = true;
                        Dx = Dx || (Dc != "pros" && Dc != "cons" && Dc != "bestuses" && Dc != "describeyourself");
                    }
                }
                De.push('<div class="pr-review-wrap" data-review-id="');
                De.push(DX.id);
                De.push('"><div class="pr-review-rating-wrapper"><div class="pr-review-author-date pr-rounded">');
                De.push((AL(DX.db, Dj, Do) || DX.d));
                De.push("</div>");
                if (DX.t > 0) {
                    De.push('<div class="pr-review-most-helpful"><p>(<span>');
                    De.push(("{0} of {1}" || "").replace("{0}", DX.v).replace("{1}", DX.t));
                    De.push("</span> ");
                    De.push("customers found this review helpful");
                    De.push(")</p></div>");
                }
                De.push('<div class="pr-review-rating"><div class="pr-stars pr-stars-small ');
                De.push(BN[DX.r].small);
                De.push('" style="background-position: 0px ');
                De.push(DX.r * -36);
                De.push('px;" title="');
                De.push(Dg[DX.r]);
                De.push('">&nbsp;</div><span class="pr-rating pr-rounded">');
                De.push(DX.r);
                De.push('.0</span><p class="pr-review-rating-headline">');
                De.push(DX.h);
                De.push("</p></div></div>");
                if (!D7) {
                    De.push('                  <div class="pr-review-author"><div class="pr-review-author-info-wrapper">');
                    if (DX.fu && (false)) {
                        if (DX.pi) {
                            De.push("<p>");
                            var Dl = M("pr_see_all_reviews_url", Do).replace("~~~MERCHANT_USER_ID~~~", DX.mu).replace("~~~NICKNAME~~~", DX.n);
                            if (Dl) {
                                De.push('<a class="pr-review-author-profile-link" href="');
                                De.push(Dl);
                                De.push('" data-pr-event="review-author-image-link"><img alt="Profile Image" src="https://graph.facebook.com/');
                                De.push(DX.fu);
                                De.push('/picture" /></a>');
                            } else {
                                if (true) {
                                    De.push('<a class="prReviewAuthorProfileLnk" data-pr-event="review-author-image-link" href="#" onclick="POWERREVIEWS.display.showIntegratedProfile(');
                                    De.push(DX.pi);
                                    De.push(", '");
                                    De.push(Dj);
                                    De.push("', POWERREVIEWS.common.getOptions('");
                                    De.push(Dt);
                                    De.push('\')); return false;"><img alt="Profile Image" src="https://graph.facebook.com/');
                                    De.push(DX.fu);
                                    De.push('/picture" /></a>');
                                } else {
                                    De.push('<a class="pr-review-author-profile-link" href="#" onclick="POWERREVIEWS.display.showProfileWithHash(\'');
                                    De.push(DX.pi);
                                    De.push("', '");
                                    De.push(EE);
                                    De.push("', {'badges':[");
                                    De.push((DX.cb || []).toString());
                                    De.push("]}, '");
                                    De.push(Dj);
                                    De.push("', POWERREVIEWS.common.getOptions('");
                                    De.push(Dt);
                                    De.push('\')); return false;" data-pr-event="review-author-image-link"><img alt="Profile Image" src="https://graph.facebook.com/');
                                    De.push(DX.fu);
                                    De.push('/picture" /></a>');
                                }
                            }
                            De.push("</p>");
                        } else {
                            var Db = y({"locale": Dj, "sharedReviewId": DX.id}, Do);
                            De.push('<a href="#" onclick="POWERREVIEWS.common.showSmallPopup(\'');
                            De.push(Db);
                            De.push("', 425, 600, {'location':'no'}); return false;\"><img alt=\"Profile Image\" src=\"https://graph.facebook.com/");
                            De.push(DX.fu);
                            De.push('/picture" /></a>');
                        }
                    }
                    De.push('<p class="pr-review-author-name">');
                    De.push("By");
                    De.push("&nbsp;");
                    if (true && DX.pi) {
                        De.push('<a class="prReviewAuthorProfileLnk" data-pr-event="review-author-profile-link" href="#" onclick="POWERREVIEWS.display.showIntegratedProfile(');
                        De.push(DX.pi);
                        De.push(", '");
                        De.push(Dj);
                        De.push("', POWERREVIEWS.common.getOptions('");
                        De.push(Dt);
                        De.push("')); return false;\"><span>");
                        De.push(DX.n);
                        De.push("</span></a>");
                    } else {
                        De.push("<span>");
                        De.push(DX.n);
                        De.push("</span>");
                    }
                    De.push('</p><p class="pr-review-author-location">');
                    De.push("from");
                    De.push(" <span>");
                    De.push(DX.w);
                    De.push("</span></p>");
                    if (DX.g) {
                        for (var DR = 0; DR < DX.g.length; DR++) {
                            var Df = DX.g[DR];
                            if (Df.k == "describeyourself") {
                                De.push('<div class="pr-review-author-affinity-wrapper"><p class="pr-review-author-affinities">');
                                De.push("About Me" || Df.n);
                                De.push(" <span>");
                                De.push(Df.v.join(", "));
                                De.push("</span></p></div>");
                            }
                        }
                    }
                    if (DX.pi && !DX.dp) {
                        var Dl = M("pr_see_all_reviews_url", Do).replace("~~~MERCHANT_USER_ID~~~", DX.mu).replace("~~~NICKNAME~~~", DX.n);
                        if (Dl) {
                            De.push('<p><a class="pr-review-author-profile-link" href="');
                            De.push(Dl);
                            De.push('" data-pr-event="review-author-profile-link">');
                            De.push("See all my reviews");
                            De.push("</a></p>");
                        } else {
                            if (!true) {
                                De.push('<p><a class="pr-review-author-profile-link" href="#" onclick="POWERREVIEWS.display.showProfileWithHash(\'');
                                De.push(DX.pi);
                                De.push("', '");
                                De.push(EE);
                                De.push("', {'badges':[");
                                De.push((DX.cb || []).toString());
                                De.push("]}, '");
                                De.push(Dj);
                                De.push("', POWERREVIEWS.common.getOptions('");
                                De.push(Dt);
                                De.push('\')); return false;" data-pr-event="review-author-profile-link">');
                                De.push("See all my reviews");
                                De.push("</a></p>");
                            }
                        }
                        De.push("                            ");
                    }
                    De.push("</div>");
                    var Dy = C7(DX.cb);
                    var D9 = (DX.o && DX.o == "e");
                    var DZ = DX.m;
                    var Dz = (DX.c && DX.c == "v");
                    if (D9 || Dy || DZ || Dz) {
                        De.push('<div class="pr-review-author-badge-wrapper">');
                        if (D9) {
                            De.push('<div class="pr-review-author-verified-buyer-wrapper pr-review-author-verified-buyer-');
                            De.push(Dj);
                            De.push('"><a href="');
                            De.push(ED);
                            De.push('"><img class="pr-badge pr-verified-buyer" src="');
                            De.push(D6);
                            De.push("/engine/images/badge_vp_");
                            De.push(Dj);
                            De.push(".gif");
                            De.push('" alt="');
                            De.push("Verified Buyer");
                            De.push('" title="');
                            De.push("Verified Buyer");
                            De.push('" /></a></div>');
                        }
                        if (Dy) {
                            De.push(Ae(Dy, Dj, Do));
                        } else {
                            if (DZ) {
                                De.push('<div class="pr-review-author-member-badge-wrapper pr-review-author-member-badge-wrapper-');
                                De.push(Dj);
                                De.push('"><img class="pr-badge pr-site-member" src="');
                                De.push(D6);
                                De.push('/engine/images/pixel.gif" alt="');
                                De.push("Site Member");
                                De.push('" title="');
                                De.push("Site Member");
                                De.push('" /></div>');
                            }
                        }
                        if (Dz && !false && !D9 && !Dy && !DZ) {
                            De.push('<div class="pr-review-author-verified pr-review-author-verified-');
                            De.push(Dj);
                            De.push('"><a href="');
                            De.push(ED);
                            De.push('"><img class="pr-badge pr-verified" src="');
                            De.push(D6);
                            De.push("/engine/images/badge_vr_");
                            De.push(Dj);
                            De.push(".gif");
                            De.push('" alt="');
                            De.push("Verified Reviewer");
                            De.push('" title="');
                            De.push("Verified Reviewer");
                            De.push('" /></a></div>');
                        }
                        De.push("</div>");
                    }
                    De.push("</div>");
                } else {
                    if (D7 && DX.pr) {
                        De.push('<div class="pr-profile-review-product-info">');
                        if (DX.pr.m && window && window.location && window.location.protocol == "http:") {
                            if (DX.pr.u) {
                                De.push('<a href="');
                                De.push(DX.pr.u);
                                De.push('"><img alt="Review" src="');
                                De.push(AM(DX.pr.m));
                                De.push('" /></a>');
                            } else {
                                De.push('<img alt="Review" src="');
                                De.push(AM(DX.pr.m));
                                De.push('" />');
                            }
                        }
                        if (DX.pr.n) {
                            if (DX.pr.u) {
                                De.push('<a href="');
                                De.push(DX.pr.u);
                                De.push('">');
                                De.push(DX.pr.n);
                                De.push("</a>");
                            } else {
                                De.push(DX.pr.n);
                            }
                        }
                        De.push("</div>");
                    }
                }
                De.push('<div class="pr-review-main-wrapper">');
                if (DX.g && (D8.pros || D8.cons || D8.bestuses)) {
                    De.push('<div class="pr-review-points"><div class="pr-review-points-attr-wrapper"><div class="pr-attribute-group pr-rounded pr-attribute-pros');
                    De.push(D8.pros ? "" : " pr-empty");
                    De.push('"><div class="pr-attribute-key"><p class="pr-attribute-label-pros">');
                    De.push("Pros");
                    De.push('</p></div><div class="pr-attribute-value"><ul class="pr-attribute-value-list">');
                    for (var DR = 0; DR < DX.g.length; DR++) {
                        var Df = DX.g[DR];
                        if (Df.k == "pros") {
                            for (var D3 = 0; D3 < Df.v.length; D3++) {
                                De.push("<li>");
                                De.push(Df.v[D3]);
                                De.push("</li>");
                            }
                            break;
                        }
                    }
                    De.push('</ul></div></div><div class="pr-attribute-group pr-rounded pr-attribute-cons');
                    De.push(D8.cons ? "" : " pr-empty");
                    De.push('"><div class="pr-attribute-key"><p class="pr-attribute-label-cons">');
                    De.push("Cons");
                    De.push('</p></div><div class="pr-attribute-value"><ul class="pr-attribute-value-list">');
                    for (var DR = 0; DR < DX.g.length; DR++) {
                        var Df = DX.g[DR];
                        if (Df.k == "cons") {
                            for (var D3 = 0; D3 < Df.v.length; D3++) {
                                De.push("<li>");
                                De.push(Df.v[D3]);
                                De.push("</li>");
                            }
                            break;
                        }
                    }
                    De.push('</ul></div></div><div class="pr-attribute-group pr-rounded pr-attribute-bestuses');
                    De.push(D8.bestuses ? "" : " pr-empty");
                    De.push(' pr-last"><div class="pr-attribute-key"><p class="pr-attribute-label-bestuses">');
                    De.push("Best Uses");
                    De.push('</p></div><div class="pr-attribute-value"><ul class="pr-attribute-value-list">');
                    for (var DR = 0; DR < DX.g.length; DR++) {
                        var Df = DX.g[DR];
                        if (Df.k == "bestuses") {
                            for (var D3 = 0; D3 < Df.v.length; D3++) {
                                De.push("<li>");
                                De.push(Df.v[D3]);
                                De.push("</li>");
                            }
                            break;
                        }
                    }
                    De.push('</ul></div></div><div class="pr-clear"></div></div></div>');
                }
                if (DX.dc && DX.dc === "sweepstakes") {
                    De.push('<div class="pr-disclosure-message"><p class="pr-disclosure-text">');
                    De.push("Submitted as part of a sweepstakes entry");
                    De.push("</p></div>");
                } else {
                    if (DX.dc && DX.dc === "sampling") {
                        De.push('<div class="pr-disclosure-message"><p class="pr-disclosure-text">');
                        De.push("Reviewer received a free sample of this product");
                        De.push("</p></div>");
                    }
                }
                De.push('<div class="pr-review-text">');
                if (DX.pv && D4 && D4[DX.pv]) {
                    De.push('<p class="pr-comments-header">');
                    De.push(("Comments about <em>{0}</em>:" || "").replace("{0}", D4[DX.pv]));
                    De.push("</p>");
                } else {
                    if (Dq) {
                        var D5 = "";
                        if (Dm) {
                            D5 += '<span class="pr-brand-name">' + Dm + " </span>";
                        }
                        D5 += '<span class="pr-product-name">' + Dq + "</span>";
                        De.push('<p class="pr-comments-header">');
                        De.push(("Comments about <em>{0}</em>:" || "").replace("{0}", D5));
                        De.push("</p>");
                    } else {
                        if (D7 && DX.pr && DX.pr.n) {
                            var D5 = "";
                            if (DX.pr.br) {
                                D5 += '<span class="pr-brand-name">' + DX.pr.br + " </span>";
                            }
                            D5 += '<span class="pr-product-name">' + DX.pr.n + "</span>";
                            De.push('<p class="pr-comments-header">');
                            De.push(("Comments about <em>{0}</em>:" || "").replace("{0}", D5));
                            De.push("</p>");
                        }
                    }
                }
                De.push('<p class="pr-comments">');
                De.push(AE(DX.p));
                De.push("</p></div>");
                if (DX.z) {
                    De.push('<div class="pr-review-text"><p class="pr-comments-header">');
                    De.push("Service and delivery comments:");
                    De.push('</p><p class="pr-comments">');
                    De.push(AE(DX.z));
                    De.push("</p></div>");
                }
                if (Dx || DX.rp || DX.sp || DX.tb || DX.ar) {
                    De.push('<div class="pr-other-attributes">');
                    if (DX.g) {
                        De.push('<div class="pr-other-attribute-tag-group"><ul class="pr-other-attributes-list">');
                        for (var DR = 0; DR < DX.g.length; DR++) {
                            var Df = DX.g[DR];
                            if (Df.k != "pros" && Df.k != "cons" && Df.k != "bestuses" && Df.k != "describeyourself") {
                                De.push('<li class="pr-other-attribute-label">');
                                De.push(Df.n);
                                De.push(':</li><li class="pr-other-attribute-value">');
                                De.push(Df.v.join(", "));
                                De.push("</li>");
                            }
                        }
                        De.push("</ul></div>");
                    }
                    if (DX.tb) {
                        De.push('<div class="pr-other-attribute-text-group"><ul class="pr-other-attributes-list">');
                        for (var DR = 0; DR < DX.tb.length; DR++) {
                            var Df = DX.tb[DR];
                            De.push('<li class="pr-other-attribute-label pr-merchant-question-label">');
                            De.push(Df.n);
                            De.push(':</li><li class="pr-other-attribute-value pr-merchant-question-value">');
                            De.push(Df.v);
                            De.push("</li>");
                        }
                        De.push("</ul></div>");
                    }
                    if (DX.ar) {
                        De.push('<div class="pr-other-attribute-additional-ratings"><ul class="pr-other-attributes-list">');
                        for (var DR = 0; DR < DX.ar.length; DR++) {
                            var Df = DX.ar[DR];
                            De.push('<li class="pr-other-attribute-label">');
                            De.push(Df.n);
                            De.push(':</li><li class="pr-other-attribute-value"><div class="pr-stars pr-stars-small pr-stars-small-subrating ');
                            De.push(BN[Df.v].small);
                            De.push('" style="background-position: 0px ');
                            De.push(Df.v * -36);
                            De.push('px;" title="');
                            De.push(Dg[Df.v]);
                            De.push('">&nbsp;</div></li>');
                        }
                        De.push("</ul></div>");
                    }
                    if (DX.rp) {
                        De.push('<div class="pr-other-attribute-recommended-products"><ul class="pr-other-attributes-list">');
                        var Di = [];
                        for (var EA = 0; EA < DX.rp.length; EA++) {
                            var Dv = DX.rp[EA];
                            Di.push(Dv.u ? '<a href="' + Dv.u + '">' + Dv.n + "</a>" : Dv.n);
                        }
                        De.push('<li class="pr-other-attribute-label">');
                        De.push("Recommended");
                        De.push(':</li><li class="pr-other-attribute-value">');
                        De.push(Di.join(", "));
                        De.push("</li></ul></div>");
                    }
                    if (DX.sp) {
                        De.push('<div class="pr-other-attribute-similar-products"><ul class="pr-other-attributes-list">');
                        var Dk = [];
                        for (var EC = 0; EC < DX.sp.length; EC++) {
                            var DY = DX.sp[EC];
                            Dk.push(DY.u ? '<a href="' + DY.u + '">' + DY.n + "</a>" : DY.n);
                        }
                        De.push('<li class="pr-other-attribute-label">');
                        De.push("Similar");
                        De.push(':</li><li class="pr-other-attribute-value">');
                        De.push(Dk.join(", "));
                        De.push("</li></ul></div>");
                    }
                    De.push('<div class="pr-clear"></div></div>');
                }
                De.push('<div class="pr-review-footer">');
                if (DX.b) {
                    var DS;
                    if (DX.b.v) {
                        DS = DX.b.v;
                    } else {
                        DS = Dr[DX.b.k];
                    }
                    De.push('<div class="pr-review-bottom-line-wrapper"><p><span class="pr-review-bottom-line">');
                    De.push("Bottom Line");
                    De.push("</span> <span></span>");
                    De.push(DS);
                    De.push("</p></div>");
                }
                if (DX.i) {
                    De.push('<div class="pr-customer-media">');
                    for (var D2 = 0; D2 < DX.i.r.length; D2++) {
                        var Dd = DX.i.r[D2];
                        if (Dd.v && Cn(Dd.v)) {
                            continue;
                        }
                        De.push('<div class="pr-customer-media-wrapper"><p class="pr-customer-media-user">');
                        if (DX.i.t == "i") {
                            De.push("Images shared by");
                            De.push(" <span>");
                            De.push(DX.n);
                            De.push("</span>");
                        } else {
                            if (DX.i.t == "v") {
                                De.push("Video shared by");
                                De.push(" <span>");
                                De.push(DX.n);
                                De.push("</span>");
                            } else {
                                De.push("Images shared by");
                                De.push(" <span>");
                                De.push(DX.n);
                                De.push("</span>");
                            }
                        }
                        De.push('</p><div class="pr-pic pr-rounded"><p class="pr-caption">');
                        De.push(Dd.c);
                        De.push('</p><div class="pr-pic-content"><div class="wrap1"><div class="wrap2">');
                        if (!Dd.v) {
                            if (Dd.s) {
                                De.push('<a href="#" onclick="POWERREVIEWS.common.showImagePopup(\'');
                                De.push(Dd.s.u);
                                De.push("', ");
                                De.push(Dd.s.w);
                                De.push(", ");
                                De.push(Dd.s.h);
                                De.push(", POWERREVIEWS.common.getOptions('");
                                De.push(Dt);
                                De.push('\')); return false;"><img src="');
                                De.push(D6);
                                De.push("/content");
                                De.push(Dd.h.u);
                                De.push('" alt="');
                                De.push("Image Thumbnail");
                                De.push('" width="');
                                De.push(Dd.h.w);
                                De.push('" height="');
                                De.push(Dd.h.h);
                                De.push('" onerror="POWERREVIEWS.common.cloudinaryThumbnailFallback(event, \'');
                                De.push(Dd.s.u);
                                De.push("', ");
                                De.push(Dd.s.w);
                                De.push(", ");
                                De.push(Dd.s.h);
                                De.push('); return false;" /></a>');
                            } else {
                                De.push('<img src="');
                                De.push(D6);
                                De.push("/content");
                                De.push(Dd.h.u);
                                De.push('" alt="');
                                De.push("Image Thumbnail");
                                De.push('" width="');
                                De.push(Dd.h.w);
                                De.push('" height="');
                                De.push(Dd.h.h);
                                De.push('" />');
                            }
                        } else {
                            De.push('<a href="#" onclick="POWERREVIEWS.common.showVideoPopup(\'');
                            De.push(Dd.v);
                            De.push("', POWERREVIEWS.common.getOptions('");
                            De.push(Dt);
                            De.push('\')); return false;"><img src="');
                            De.push(Dd.h.u);
                            De.push('" alt="');
                            De.push("Video Thumbnail");
                            De.push('" width="75" height="50" onerror="this.src=\'//res.cloudinary.com/powerreviews/image/upload/t_media_lib_thumb/video_unavailable.jpg\'"/></a>');
                        }
                        De.push("</div></div></div>");
                        if (Dd.g) {
                            De.push('<p class="pr-pic-tags"><span class="pr-tag-label">');
                            De.push("Tags:");
                            De.push("</span> ");
                            De.push(Dd.g.join(", "));
                            De.push("</p>");
                        }
                        De.push("</div></div>");
                    }
                    De.push('<div class="pr-clear"></div></div>');
                }
                if (DX.y) {
                    De.push('<div class="pr-merchant-comments">');
                    for (var Dw = 0; Dw < DX.y.length; Dw++) {
                        De.push('<p class="pr-merchant-comments-text"><span>');
                        De.push(("Customer Service Response: " || "").replace("{0}", Q(Do).name));
                        De.push("</span>");
                        De.push(AE(DX.y[Dw]));
                        De.push("</p>");
                    }
                    De.push("</div>");
                }
                if (DX.at) {
                    var DV = M("pr_attribution_table", Do);
                    var D1 = DV[DX.at];
                    if (D1) {
                        if (D1.originating_merchant_url && D1.image_uri) {
                            if (D1.attribution_text) {
                                De.push('<div class="pr-review-attribution">');
                                if (D1.attribution_text) {
                                    De.push('<div class="pr-review-attribution-text"><p>');
                                    De.push(D1.attribution_text);
                                    De.push("</p></div>");
                                }
                                De.push('<div class="pr-review-attribution-img"><p class="pr-review-attribute-imgLabel">');
                                De.push("REVIEWED AT");
                                De.push('</p><a data-pr-event="syndication-logo-lnk" target="_blank" href="');
                                De.push(D1.originating_merchant_url);
                                De.push('"><img alt="Attribution" src="');
                                De.push(D6);
                                De.push("/engine/images/");
                                De.push(D1.image_uri);
                                De.push('"/></a></div><div class="pr-clear"></div></div>');
                            } else {
                                De.push('<div class="pr-review-attribution-img"><p class="pr-review-attribute-imgLabel">');
                                De.push("REVIEWED AT");
                                De.push('</p><a data-pr-event="syndication-logo-lnk" target="_blank" href="');
                                De.push(D1.originating_merchant_url);
                                De.push('"><img src="');
                                De.push(D6);
                                De.push("/engine/images/");
                                De.push(D1.image_uri);
                                De.push('"/></a></div><div class="pr-clear"></div>');
                            }
                        }
                    }
                }
                if (DX.t > 0) {
                    De.push('<div class="pr-review-most-helpful-bottom"><p>(<span>');
                    De.push(("{0} of {1}" || "").replace("{0}", DX.v).replace("{1}", DX.t));
                    De.push("</span> ");
                    De.push("customers found this review helpful");
                    De.push(")</p></div>");
                }
                if (!D7) {
                    De.push('<div class="pr-review-tools"><p class="pr-review-helpful-text">');
                    De.push("Was this review helpful?");
                    De.push('&nbsp;<a data-pr-event="review-helpful-yes-link" class="pr-review-helpful-text-link" href="#" onclick="POWERREVIEWS.display.submitHelpfulVote(\'');
                    De.push(DX.id);
                    De.push("', 'helpful', '");
                    De.push(Dj);
                    De.push("', POWERREVIEWS.common.getOptions('");
                    De.push(Dt);
                    De.push("')); return false;\">");
                    De.push("Yes");
                    De.push('</a>&nbsp;/&nbsp;<a data-pr-event="review-helpful-no-link" class="pr-review-helpful-text-link" href="#" onclick="POWERREVIEWS.display.submitHelpfulVote(\'');
                    De.push(DX.id);
                    De.push("', 'unhelpful', '");
                    De.push(Dj);
                    De.push("', POWERREVIEWS.common.getOptions('");
                    De.push(Dt);
                    De.push("')); return false;\">");
                    De.push("No");
                    De.push('</a></p><p class="pr-review-report-issue"><span class="pr-review-report-issue-hyphen">&nbsp;-&nbsp;</span>');
                    De.push("You may also");
                    De.push(' <a href="#" data-pr-event="review-report-issue-link" class="pr-review-helpful-text-link" onclick="POWERREVIEWS.display.launchErrorDiv(\'');
                    De.push(DX.id);
                    De.push("', '");
                    De.push(Dj);
                    De.push("', '");
                    De.push(Dt);
                    De.push("', POWERREVIEWS.common.getOptions('");
                    De.push(Dt);
                    De.push("')); return false;\">");
                    De.push("flag this review");
                    De.push('</a></p><div class="pr-error" id="error_div');
                    De.push(DX.id);
                    De.push('" style=""></div><p class="pr-review-helpful-response" id="review_feedback');
                    De.push(DX.id);
                    De.push('"></p></div>');
                }
                De.push('</div></div><div class="pr-clear"></div>');
                if (false) {
                    var Da = CH({"locale": Dj, "sharedReviewId": DX.id}, Do);
                    De.push('<p class="pr-fb-reviewComment"><span><a data-pr-event="review-fb-review-comment-link" href="#" onclick="POWERREVIEWS.common.showSmallPopup(\'');
                    De.push(Da);
                    De.push("', 450, 600, {'location':'no'}); return false;\">");
                    De.push("Comment on this review");
                    De.push('</a></span><img alt="Help Icon" class="pr-profile-fb-help-icon" src="');
                    De.push(D6);
                    De.push('/engine/images/icon_orange_help.gif" title="');
                    De.push("Click here to write a comment and share this review with your friends on Facebook. Your comment and this review will show up in your Facebook News Feed.");
                    De.push('" />');
                    if (Y && Y["facebook_comment"]) {
                        De.push('<span class="pr-fb-reviewComment-social-loyalty">');
                        De.push("(earn points)");
                        De.push("</span>");
                    }
                    De.push('</p><div class="pr-clear"></div>');
                }
                De.push("</div>");
            }
            if (!D7) {
                De.push('<div class="pr-pagination-bottom"><div class="pr-page-count-wrapper"><p class="pr-page-count">');
                if (Dh == DU) {
                    De.push("Displaying review");
                    De.push(" <strong>");
                    De.push((Dh + 1));
                    De.push("</strong>");
                } else {
                    De.push("Displaying reviews");
                    De.push(" <strong>");
                    De.push((Dh + 1) + "-" + (DU + 1));
                    De.push("</strong>");
                }
                De.push('</p><p class="pr-nav-back-to-top"><a href="');
                De.push(EF);
                De.push('" data-pr-event="footer-back-to-top-link">');
                De.push("Back to top");
                De.push("</a></p></div>");
                if (Dp > DT) {
                    De.push('<div class="pr-page-nav-wrapper"><p class="pr-page-nav"><span class="pr-page-prev">');
                    if (Dh > 0) {
                        De.push('<a data-pr-event="footer-page-prev-link" onclick="POWERREVIEWS.display.getReviewsFromMeta(');
                        De.push(DW - 1);
                        De.push(", '");
                        De.push(EE);
                        De.push("', '");
                        De.push(Dj);
                        De.push("', '");
                        De.push(Dt);
                        De.push("', POWERREVIEWS.common.getOptions('");
                        De.push(Dt);
                        De.push("')); location.hash='#'; location.hash='#pr-header-back-to-top-link'; return (false);\" href=\"");
                        De.push(Ds.replace("~~~REVIEW_PAGE~~~", DW - 1));
                        De.push('">&laquo; ');
                        De.push("Previous");
                        De.push("</a>");
                    } else {
                        De.push("Previous");
                    }
                    De.push('</span><span class="pr-divider"> | </span><span class="pr-page-next">');
                    if (DU < Dp - 1) {
                        De.push('<a data-pr-event="footer-page-next-link" onclick="POWERREVIEWS.display.getReviewsFromMeta(');
                        De.push(DW + 1);
                        De.push(", '");
                        De.push(EE);
                        De.push("', '");
                        De.push(Dj);
                        De.push("', '");
                        De.push(Dt);
                        De.push("', POWERREVIEWS.common.getOptions('");
                        De.push(Dt);
                        De.push("')); location.hash='#'; location.hash='#pr-header-back-to-top-link'; return (false);\" href=\"");
                        De.push(DQ.replace("~~~REVIEW_PAGE~~~", DW + 1));
                        De.push('">');
                        De.push("Next");
                        De.push(" &raquo;</a>");
                    } else {
                        De.push("Next");
                    }
                    De.push("</span></p></div>");
                }
                De.push('<div class="pr-clear"></div></div>');
            }
            De.push("</div>");
            return De.join("");
        }

        E.display.processReviewsTemplate = Bc;

        function BS(DS, DR, DQ, DT) {
            var i = [];
            i.push('<div class="pr-report-issue-header">');
            i.push("Please let us know what kind of issue this is:");
            i.push('<span class="pr-required">*</span></div><div><input type="radio" name="error_radio');
            i.push(DS);
            i.push('" id="profanity_');
            i.push(DS);
            i.push('" value="profane"><label for="profanity_');
            i.push(DS);
            i.push('">');
            i.push("Profanity");
            i.push('</label></div><div><input type="radio" name="error_radio');
            i.push(DS);
            i.push('" id="wrong_product_');
            i.push(DS);
            i.push('" value="wrong_product"><label for="wrong_product_');
            i.push(DS);
            i.push('">');
            i.push("Wrong product");
            i.push('</label></div><div><input type="radio" name="error_radio');
            i.push(DS);
            i.push('" id="spam_');
            i.push(DS);
            i.push('" value="spam"><label for="spam_');
            i.push(DS);
            i.push('">');
            i.push("Spam");
            i.push('</label></div><div><input type="radio" name="error_radio');
            i.push(DS);
            i.push('" id="duplicate_');
            i.push(DS);
            i.push('" value="duplicate"><label for="duplicate_');
            i.push(DS);
            i.push('">');
            i.push("Duplicate");
            i.push('</label></div><div><input type="radio" name="error_radio');
            i.push(DS);
            i.push('" id="copyright_violation_');
            i.push(DS);
            i.push('" value="copyright"><label for="copyright_violation_');
            i.push(DS);
            i.push('">');
            i.push("Copyright violation");
            i.push('</label></div><div><input type="radio" name="error_radio');
            i.push(DS);
            i.push('" id="not_review_');
            i.push(DS);
            i.push('" value="not_review"><label for="not_review_');
            i.push(DS);
            i.push('">');
            i.push("Not a product review");
            i.push('</label></div><div><input type="radio" name="error_radio');
            i.push(DS);
            i.push('" id="customer_image_');
            i.push(DS);
            i.push('" value="customer_image"><label for="customer_image_');
            i.push(DS);
            i.push('">');
            i.push("Customer image");
            i.push('</label></div><div><input type="radio" name="error_radio');
            i.push(DS);
            i.push('" id="problem_with_image_');
            i.push(DS);
            i.push('" value="customer_image"><label for="problem_with_image_');
            i.push(DS);
            i.push('">');
            i.push("Problem with image");
            i.push('</label></div><div><input type="radio" name="error_radio');
            i.push(DS);
            i.push('" id="other_');
            i.push(DS);
            i.push('" value="other"><label for="other_');
            i.push(DS);
            i.push('">');
            i.push("Other");
            i.push('</label></div><div><label for="error_contact_email');
            i.push(DS);
            i.push('">');
            i.push("Email Address:");
            i.push('<span class="pr-required">*</span></label><input class="pr-error-email" type="text" id="error_contact_email');
            i.push(DS);
            i.push('" cols="20" maxlength="80"></div><div class="pr-issue-subtext">');
            i.push('</div><div><label for="error_comments');
            i.push(DS);
            i.push('">');
            i.push("Comments:");
            i.push('</label><textarea class="pr-error-comments" id="error_comments');
            i.push(DS);
            i.push('" cols="30" rows="3"></textarea></div><button class="pr-submit-button" onclick="POWERREVIEWS.display.submitError(\'');
            i.push(DS);
            i.push("', '");
            i.push(DR);
            i.push("', POWERREVIEWS.common.getOptions('");
            i.push(DQ);
            i.push("')); return false;\"><span>");
            i.push("Submit");
            i.push('</span></button><button class="pr-cancel-button" onclick="POWERREVIEWS.display.cancelError(\'');
            i.push(DS);
            i.push("'); return false;\"><span>");
            i.push("Cancel");
            i.push("</span></button>");
            return i.join("");
        }

        E.display.processErrorDivTemplate = BS;

        function AV(DT, DX, De) {
            var Df = [];
            Df.push('<div class="pr-other-attributes-histogram"><ul class="pr-other-attributes-list">');
            for (var DR = 0; DR < DT.length; DR++) {
                var Da = DT[DR];
                var Dd = {};
                var Db = 0;
                var DQ = 0;
                var DV = 0;
                for (var i = 0; i < Da.v.length; i++) {
                    var DZ = Da.v[i];
                    Dd[DZ.n.toLowerCase()] = DZ.c;
                }
                for (var DS = 0; DS < Da.a.length; DS++) {
                    var DW = Da.a[DS];
                    var DY = DW.toLowerCase();
                    Dd[DY] = Dd[DY] || 0;
                    Db += Dd[DY];
                    if (Dd[DY] > DQ) {
                        DQ = Dd[DY];
                        DV = DS;
                    }
                }
                Df.push('<li class="pr-other-attributes-group pr-other-attribute-');
                Df.push(Da.k);
                Df.push('"><ul><li class="pr-other-attribute-label">');
                Df.push(Da.n);
                Df.push(':</li><li class="pr-other-attribute-value"><table>');
                for (var DS = 0; DS < Da.a.length; DS++) {
                    var DW = Da.a[DS];
                    var DY = DW.toLowerCase();
                    var Dc = Dd[DY] / Db * 100;
                    var DU = (DV == DS);
                    Df.push('<tr class="pr-other-attribute-value-histogram-element ');
                    Df.push(DU ? "pr-other-attribute-value-histogram-element-max" : "");
                    Df.push('"><td class="pr-other-attribute-value-histogram-label"><p>');
                    Df.push(DW);
                    Df.push('</p></td><td class="pr-other-attribute-value-histogram-bar"><div class="pr-other-attribute-value-histogram-wrapper">');
                    if (Dd[DY] != 0) {
                        Df.push('<div class="pr-other-attribute-value-histogram-barValue" style="width:');
                        Df.push(Dc);
                        Df.push('%">&nbsp;</div>');
                    } else {
                        Df.push("&nbsp;");
                    }
                    Df.push('</div></td><td class="pr-other-attribute-value-histogram-stats">');
                    if (DU) {
                        Df.push('<p><span class="pr-other-attribute-value-histogram-stats-pct">');
                        Df.push(Math.round(Dc));
                        Df.push('%&nbsp;</span><span class="pr-other-attribute-value-histogram-stats-count">');
                        if (Dd[DY] == 1) {
                            Df.push('<p class="pr-snippet-review-count">');
                            Df.push("(1 review)");
                            Df.push("</p>");
                        } else {
                            Df.push('<p class="pr-snippet-review-count">');
                            Df.push("({0} reviews)".replace("{0}", Dd[DY]));
                            Df.push("</p>");
                        }
                        Df.push("</span></p>");
                    }
                    Df.push("</td></tr>");
                }
                Df.push("</table></li></ul></li>");
            }
            Df.push('<li class="pr-clear"></li></ul></div>');
            return Df.join("");
        }

        function Cj(DT, DQ, DS) {
            var i = [];
            i.push('<div class="pr-other-attributes-subratings"><ul class="pr-other-attributes-list">');
            for (var DR = 0; DR < DT.length; DR++) {
                var DU = DT[DR];
                i.push('<li class="pr-other-attributes-group pr-other-attribute-');
                i.push(DU.k);
                i.push('"><ul><li class="pr-other-attribute-label">');
                i.push(DU.n);
                i.push(':</li><li class="pr-other-attribute-value"><div class="pr-stars pr-stars-small pr-stars-small-subrating ');
                i.push(BN[DU.a].small);
                i.push('" style="background-position: 0px ');
                i.push(DU.a * -36);
                i.push('px;">&nbsp;</div></li></ul></li>');
            }
            i.push("</ul></div>");
            return i.join("");
        }

        function AJ(DV, DX, DW, DY, DT) {
            var DZ = [];
            var DQ = ["1 Stars", "2 Stars", "3 Stars", "4 Stars", "5 Stars"];
            var DR = 0;
            for (var DU = 0; DU < 5; DU++) {
                DR += DV[DU];
            }
            var DS = (DV[DU] === 0) ? "pr-zero-ratings" : "";
            DZ.push('<div class="pr-ratings-histogram-wrapper"><ul class="pr-ratings-histogram-content">');
            for (DU = 4; DU >= 0; DU--) {
                DZ.push('<li class="pr-histogram-');
                DZ.push([DU + 1]);
                DZ.push("Stars ");
                DZ.push(DS);
                DZ.push('" ');
                if (DV[DU] > 0) {
                    DZ.push(' onclick="POWERREVIEWS.display.filterReviewsByRating(this, ');
                    DZ.push([DU + 1]);
                    DZ.push(", '");
                    DZ.push(DW);
                    DZ.push("', POWERREVIEWS.common.getOptions('");
                    DZ.push(DW);
                    DZ.push("'), ");
                    DZ.push(DT);
                    DZ.push(');return false" ');
                }
                DZ.push('><p class="pr-histogram-label"><span>');
                DZ.push(DQ[DU]);
                DZ.push('</span></p><div class="pr-ratings-histogram-bar">');
                if (DV[DU] != 0) {
                    DZ.push('<div class="pr-ratings-histogram-barValue" style="width:');
                    DZ.push(DV[DU] / DR * (100));
                    DZ.push('%">&nbsp;</div>');
                } else {
                    DZ.push("&nbsp;");
                }
                DZ.push('</div><p class="pr-histogram-count">');
                if (DV[DU] != 0) {
                    DZ.push("<span>(");
                    DZ.push(DV[DU]);
                    DZ.push(")</span>");
                } else {
                    DZ.push("<span>(0)</span>");
                }
                DZ.push("</p></li>");
            }
            DZ.push("</ul></div>");
            return DZ.join("");
        }

        function AD(DS, DT, DV, DW, DU, DY) {
            var DZ = [];
            var DQ = Au(DS, DU, DY);
            var DX = window.location.protocol;
            var i = "All";
            var DR = AM(DW);
            DZ.push('<div id="pr-fb-follow-wrapper-');
            DZ.push(DU);
            DZ.push("-");
            DZ.push(DT);
            DZ.push('" class="pr-fb-follow-contentwrapper pr-fb-follow-category"><div class="pr-fb-follow-body"><p class="pr-fb-follow-modal-header">');
            DZ.push("Follow this Product");
            DZ.push('</p><div class="pr-fb-follow-content pr-fb-follow-body-left"><div class="pr-fb-follow-content-wrapper"><div class="pr-fb-follow-info">');
            if (DR && DX == "http:") {
                DZ.push('<img src="');
                DZ.push(DR);
                DZ.push('" /><br />');
            }
            DZ.push('<p class="pr-emphasis">');
            DZ.push(DV);
            DZ.push('</p></div></div></div><div class="pr-fb-follow-info pr-fb-follow-body-right"><div id="pr-fb-follow-info-wrapper-');
            DZ.push(DU);
            DZ.push("-");
            DZ.push(DT);
            DZ.push('" class="pr-fb-follow-info-wrapper"><p class="pr-reset">');
            if (i == "Facebook" || i == "All") {
                DZ.push("<b>Click the Like button</b> to follow on Facebook OR enter your email. Get the latest reviews for this product on your Facebook News Feed or by email. You can unsubscribe anytime.");
            }
            if (i == "Email") {
                DZ.push("Enter your email to get the latest reviews for this product. You can unsubscribe anytime.");
            }
            DZ.push('</p></div></div><div class="pr-clear"></div></div><div class="pr-fb-follow-footer">');
            if (i == "Facebook" || i == "All") {
                DZ.push('<div class="pr-fb-follow-cta-like pr-fb-follow-body-left"><div class="pr-fb-follow-cta-like-wrapper"><p class="pr-fb-follow-on-facebook pr-fb-link-med">');
                DZ.push("Follow on <span>Facebook</span>");
                DZ.push('</p><div class="pr-fb-likebtn-wrapper" id="pr-fb-likebtn-wrapper-');
                DZ.push(DU);
                DZ.push("-");
                DZ.push(DT);
                DZ.push('"><iframe class="pr-fb-likebtn" src="');
                DZ.push(DX);
                DZ.push("//www.facebook.com/plugins/like.php?href=");
                DZ.push(DQ);
                DZ.push('&layout=button_count&show_faces=false" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div></div></div>');
            }
            if (i == "Email" || i == "All") {
                DZ.push('<div class="pr-fb-follow-cta-email pr-fb-follow-body-right"><div class="pr-fb-follow-cta-email-wrapper"><span class="pr-error-msg pr-hidden" id="pr-fb-follow-errorMsg-');
                DZ.push(DU);
                DZ.push("-");
                DZ.push(DT);
                DZ.push('">');
                DZ.push("Please enter a valid email address.");
                DZ.push('</span><input type="text" id="pr-fb-follow-email-');
                DZ.push(DU);
                DZ.push("-");
                DZ.push(DT);
                DZ.push('" class="pr-fb-follow-email-input" /><a href="#" onclick="POWERREVIEWS.common.validateAndProcessEmail(this, POWERREVIEWS.common.getOptions(\'');
                DZ.push(Ah(DY));
                DZ.push('\'));return false" class="pr-fb-follow-submit-btn pr-fb-follow-submit-link" prData=\'{"type":"productEmailFollower","keyValue":"');
                DZ.push(DT);
                DZ.push('","merchantGroupId":"');
                DZ.push(17731);
                DZ.push('","pageId":"');
                DZ.push(DT);
                DZ.push('","locale":"');
                DZ.push(DU);
                DZ.push('","siteId":"');
                DZ.push(BG(M("pr_site_id", DY) || "-"));
                DZ.push('","target":"pr-fb-follow-email-');
                DZ.push(DU);
                DZ.push("-");
                DZ.push(DT);
                DZ.push("\"}' >");
                DZ.push("SUBMIT");
                DZ.push("</a></div></div>");
            }
            DZ.push('<div class="pr-clear"></div></div></div>');
            return DZ.join("");
        }

        function Bu(DS, DV, DY, DU) {
            var DZ = [];
            var DX = window.location.protocol;
            var DQ = -1;
            var i = "All";
            DZ.push('<div id="pr-fb-follow-wrapper-');
            DZ.push(DV);
            DZ.push("-");
            DZ.push(DU);
            DZ.push('" class="pr-fb-follow-contentwrapper pr-fb-follow-category"><div class="pr-fb-follow-body"><p class="pr-fb-follow-modal-header">');
            DZ.push("Follow This Category");
            DZ.push('</p><div class="pr-fb-follow-content pr-fb-follow-body-left"><div class="pr-fb-follow-content-wrapper">');
            if (DS.length > 0) {
                DZ.push('<ul class="pr-fb-follow-product-category">');
                var DR = 0;
                for (var DT = 0; DT < DS.length; DT++) {
                    if (DS[DT].label.length > 0) {
                        DZ.push('<li class="category-');
                        DZ.push(DR);
                        DZ.push('"><input type="radio" name="category" value="');
                        DZ.push(DS[DT].url);
                        DZ.push('" onclick=\'POWERREVIEWS.display.toggleFbLikeButton("pr-fb-like-');
                        DZ.push(DT);
                        DZ.push('",{"target":"pr-fb-follow-email-submit-');
                        DZ.push(DV);
                        DZ.push("-");
                        DZ.push(DU);
                        DZ.push('","keyValue":"');
                        DZ.push(AO(DS[DT].code));
                        DZ.push('","locale":"');
                        DZ.push(DV);
                        DZ.push('","pageId":"');
                        DZ.push(DU);
                        DZ.push("\"})' ");
                        DZ.push((DR == 0 ? "checked" : ""));
                        DZ.push("/><p>");
                        DZ.push(DS[DT].label);
                        DZ.push('</p><div class="pr-clear"></div></li>');
                        if (DQ == -1) {
                            DQ = DT;
                        }
                        DR++;
                    }
                }
                if (DQ == -1) {
                    DQ = DS.length - 1;
                }
                DZ.push("</ul>");
            }
            DZ.push('</div></div><div class="pr-fb-follow-info pr-fb-follow-body-right"><div id="pr-fb-follow-info-wrapper-');
            DZ.push(DV);
            DZ.push("-");
            DZ.push(DU);
            DZ.push('" class="pr-fb-follow-info-wrapper"><p class="pr-reset">');
            if (i == "Facebook" || i == "All") {
                DZ.push("<b>Choose a product category and click the Like</b> button OR enter your email. Get reviews for new and popular products on your Facebook News Feed or by email. You can unsubscribe anytime.");
            }
            if (i == "Email") {
                DZ.push("Enter your email to get reviews for new and popular products. You can unsubscribe anytime.");
            }
            DZ.push('</p></div></div><div class="pr-clear"></div></div><div class="pr-fb-follow-footer">');
            if (i == "Facebook" || i == "All") {
                DZ.push('<div class="pr-fb-follow-cta-like pr-fb-follow-body-left"><div class="pr-fb-follow-cta-like-wrapper"><p class="pr-fb-follow-on-facebook pr-fb-link-med">');
                DZ.push("Follow on <span>Facebook</span>");
                DZ.push('</p><div class="pr-fb-likebtn-wrapper" id="pr-fb-likebtn-wrapper-');
                DZ.push(DV);
                DZ.push("-");
                DZ.push(DU);
                DZ.push('">');
                if (DS.length > 0) {
                    var DW = "pr-hidden";
                    for (var DT = 0; DT < DS.length; DT++) {
                        DW = "pr-hidden";
                        if (DT == DQ) {
                            DW = "";
                        }
                        DZ.push('<iframe id="pr-fb-like-');
                        DZ.push(DT);
                        DZ.push('" class="pr-fb-likebtn ');
                        DZ.push(DW);
                        DZ.push('" src="');
                        DZ.push(DX);
                        DZ.push("//www.facebook.com/plugins/like.php?href=");
                        DZ.push(DS[DT].url);
                        DZ.push('&layout=button_count&show_faces=false" scrolling="no" frameborder="0" allowTransparency="true"></iframe>');
                    }
                }
                DZ.push("</div></div></div>");
            }
            if (i == "Email" || i == "All") {
                DZ.push('<div class="pr-fb-follow-cta-email pr-fb-follow-body-right"><div class="pr-fb-follow-cta-email-wrapper"><span class="pr-error-msg pr-hidden" id="pr-fb-follow-errorMsg-');
                DZ.push(DV);
                DZ.push("-");
                DZ.push(DU);
                DZ.push('">');
                DZ.push("Please enter a valid email address.");
                DZ.push('</span><input type="text" id="pr-fb-follow-email-');
                DZ.push(DV);
                DZ.push("-");
                DZ.push(DU);
                DZ.push('" class="pr-fb-follow-email-input" /><a id="pr-fb-follow-email-submit-');
                DZ.push(DV);
                DZ.push("-");
                DZ.push(DU);
                DZ.push('" href="#" onclick="POWERREVIEWS.common.validateAndProcessEmail(this, POWERREVIEWS.common.getOptions(\'');
                DZ.push(Ah(DY));
                DZ.push('\'));return false" class="pr-fb-follow-submit-btn pr-fb-follow-submit-link" prData=\'{"type":"productCategoryEmailFollower","keyValue":"');
                DZ.push(AO(DS[DQ].code));
                DZ.push('","merchantGroupId":"');
                DZ.push(17731);
                DZ.push('","pageId":"');
                DZ.push(DU);
                DZ.push('","locale":"');
                DZ.push(DV);
                DZ.push('","siteId":"');
                DZ.push(BG(M("pr_site_id", DY) || "-"));
                DZ.push('","target":"pr-fb-follow-email-');
                DZ.push(DV);
                DZ.push("-");
                DZ.push(DU);
                DZ.push("\"}' >");
                DZ.push("SUBMIT");
                DZ.push("</a></div></div>");
            }
            DZ.push('<div class="pr-clear"></div></div><div class="pr-clear"></div></div>');
            return DZ.join("");
        }

        function CL(DQ) {
            var i = [];
            i.push('<div class="pr-modal-shadow"></div><div id="pr-modal-container-');
            i.push(DQ);
            i.push('" class="pr-modal-container"></div><a class="pr-close" href="#" onclick="POWERREVIEWS.display.hideModal(\'');
            i.push(DQ);
            i.push("'); return false;\"><span>close</span></a>");
            return i.join("");
        }

        var Cg = 0;
        var Av = false;

        function Cr(DR, DT) {
            if (Ba(DR, DT)) {
                BV(DR, DT);
                var DS = C5(M("pr_page_id", DT));
                var DQ = X("pr_locale", DT);
                var DV = "pr-snippet-" + DS;
                var i = false;
                Cg++;
                if (document.getElementById(DV)) {
                    Br(DS, DQ, DV, i, DT);
                } else {
                    var DU = "pr-snippet-" + DS + "-" + Cg;
                    DR.write('<div id="' + DU + '" class="pr-snippet"></div>');
                    Br(DS, DQ, DU, i, DT);
                }
                if (!Av) {
                    setTimeout(function () {
                        DA(DT);
                    }, 3000);
                    Av = true;
                }
            }
        }

        E.display.snippet = Cr;

        function DA(i) {
            m({"type": "snippet", "count": Cg}, i);
        }

        function Ca(i, DQ) {
        }

        function Bo(DQ) {
            var i = "http://assets.pinterest.com/js/pinit.js";

            function DR() {
                var DS = document.createElement("script");
                DS.setAttribute("type", "text/javascript");
                DS.setAttribute("src", i);
                document.getElementsByTagName("body")[0].appendChild(DS);
            }

            if (document.getElementById(DQ)) {
                DR();
            } else {
                setTimeout(function () {
                    Bo(DQ);
                }, 500);
            }
        }

        function B5(i) {
            return i + "-google-plus-one";
        }

        function Bn(i) {
            return i + "-pinterest-pin-it";
        }

        function Br(DR, DQ, DT, i, DS) {
            CD(DR, DQ, function (DV) {
                var Dc = M("pr_snippet_min_reviews", DS);
                var DY = 0;
                var DZ = 0;
                var De = "";
                var Db = "";
                var Dd = DT;
                var DX = null;
                var DU = null;
                var DW = function () {
                    if (Dc <= DY) {
                        BE(DT, H(DR, DY, DZ, DX, DU, De, Db, i, Dd, DQ, DS), function () {
                            Ca(B5(Dd, DS));
                            B3(DR, DQ, false, DS);
                        });
                    }
                };
                if (DV) {
                    De = DV.image_url || DV.image_uri;
                    Db = DV.name;
                    if (DV.reviews) {
                        DY = DV.reviews.review_count;
                        DZ = DV.reviews.avg;
                    }
                }
                var Da = E.common.get("pr_snippet_style") || "LEGACY";
                if (Da !== "LEGACY" && DY > 0) {
                    Cq(DR, DQ, function (Df) {
                        DX = Df.b || null;
                        DU = DV.reviews.review_ratings;
                        DW();
                    }, DS);
                } else {
                    DW();
                }
            }, DS);
        }

        function H(Dd, i, Dc, Do, DY, Dn, DW, Dl, DS, Dg, DT) {
            var Di = E.common.get("pr_snippet_style") || "LEGACY";
            if (Di !== "LEGACY") {
                var Dd = M("pr_page_id", DT);
                var DR = C5(Dd);
                var Dg = X("pr_locale", DT);
                var Dj = "engine-" + DR + "-" + Dg;
                var DQ = function () {
                    if (E.display.renderSnippet) {
                        E.display.renderSnippet(DS, {count: i, rating: Dc, bottomLine: Do, reviewRatings: DY, key: Dj});
                    }
                };
                if (!POWERREVIEWS.config.is_ui_library_initialized) {
                    E.common.getCallbacks()[DS + "-UI-LIBRARY-ONLOAD"] = DQ;
                } else {
                    DQ();
                }
                return;
            } else {
                var Db = [];
                var DU = N(M("pr_page_id", DT), DT);
                var Dh = M("pr_read_review", DT);
                var De = T(Dc);
                var Dr = Math.round(Dc);
                var DV = "";
                var Dq = "";
                var Dm = M("pr_snippet_star_click", DT);
                if (Dm) {
                    DV = " cursor:pointer;";
                    Dq = ' onclick="' + Dm + '"';
                }
                var Dp = ["Got it? Rate it.", "Not good", "Needs that special something", "Average, ordinary", "That's good stuff", "Perfect. It doesn't get any better"];
                var Df = M("pr_facebook_like_button_url", DT);
                if (Df == null) {
                    Df = document.URL;
                }
                Df = BG(Df);
                if (Df == "") {
                    Dl = false;
                }
                var Da = window.location.protocol;
                var DX = false && !M("pr_suppress_google_plus_one", DT);
                var DZ = false && Dn && DW;
                var Dk = AM(Dn);
                Db.push('<div class="pr-snippet-wrapper"><div class="pr-snippet-stars"><div title="');
                Db.push(Dp[Dr]);
                Db.push('" style="background-position: 0px ');
                Db.push(De * -36);
                Db.push("px;");
                Db.push(DV);
                Db.push('" class="pr-stars pr-stars-small ');
                Db.push(BN[De].small);
                Db.push('"');
                Db.push(Dq);
                Db.push('>&nbsp;</div><span class="pr-snippet-rating-decimal pr-rounded">');
                Db.push((Dc * 10) % 10 == 0 ? Dc + ".0" : Dc);
                Db.push("</span></div>");
                if (i == 0) {
                    Db.push('<p class="pr-snippet-review-count">');
                    Db.push("(No reviews)");
                    Db.push("</p>");
                } else {
                    if (i == 1) {
                        Db.push('<p class="pr-snippet-review-count">');
                        Db.push("(1 review)");
                        Db.push("</p>");
                    } else {
                        Db.push('<p class="pr-snippet-review-count">');
                        Db.push("({0} reviews)".replace("{0}", i));
                        Db.push("</p>");
                    }
                }
                Db.push('<div class="pr-snippet-read-write">');
                if (i > 0) {
                    if (Dh) {
                        if (i == 1) {
                            Db.push('<div class="pr-snippet-read-reviews"><a href="');
                            Db.push(Dh);
                            Db.push('" data-pr-event="snippet-read-reviews" class="pr-snippet-link" id="pr-snippet-read-link-');
                            Db.push(Dd);
                            Db.push('">');
                            Db.push("Read <span>1</span> Review");
                            Db.push("</a></div>");
                        } else {
                            Db.push('<div class="pr-snippet-read-reviews"><a href="');
                            Db.push(Dh);
                            Db.push('" data-pr-event="snippet-read-reviews" class="pr-snippet-link" id="pr-snippet-read-link-');
                            Db.push(Dd);
                            Db.push('">');
                            Db.push("Read <span>{0}</span> Reviews".replace("{0}", i));
                            Db.push("</a></div>");
                        }
                    }
                    if (DU) {
                        Db.push('<div class="pr-snippet-write-review"><a href="');
                        Db.push(DU);
                        Db.push('" data-pr-event="snippet-write-review" class="pr-snippet-link">');
                        Db.push("Write a Review");
                        Db.push("</a></div>");
                    }
                } else {
                    if (DU) {
                        Db.push('<div class="pr-snippet-write-first-review"><p>');
                        Db.push("Be the first to");
                        Db.push('</p> <a href="');
                        Db.push(DU);
                        Db.push('" data-pr-event="snippet-write-review" class="pr-snippet-link">');
                        Db.push("Write a Review");
                        Db.push("</a></div>");
                    }
                }
                Db.push('<div class="pr-clear"></div></div><div class="pr-clear"></div><div class="pr-snippet-social-bar">');
                if (DX) {
                    Db.push('<div class="pr-google-plus-one"><div id="');
                    Db.push(B5(DS));
                    Db.push('"></div></div>');
                }
                if (Dl) {
                    Db.push('<div class="pr-facebook-like-snippet"><iframe src="');
                    Db.push(Da);
                    Db.push("//www.facebook.com/plugins/like.php?href=");
                    Db.push(Df);
                    Db.push('&layout=button_count&show_faces=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe></div>');
                }
                if (DZ) {
                    Db.push('<div class="pr-pinterest-pin-it" data-pr-event="snippet-pinterest-pinit-button" id="');
                    Db.push(Bn(DS));
                    Db.push('"><a href="http://pinterest.com/pin/create/button/?url=');
                    Db.push(BG(document.URL));
                    Db.push("&media=");
                    Db.push(Dk);
                    Db.push("&description=");
                    Db.push(BG(DW));
                    Db.push('" class="pin-it-button" count-layout="horizontal"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a></div>');
                }
                Db.push('<div class="pr-clear"></div></div></div>');
                return Db.join("");
            }
        }

        function B3(DQ, i, DS, DR) {
            By.userTrackingDomain = M("pr_tracking_domain", DR);
            var DT = document.getElementById("pr-snippet-" + DQ + "-" + Cg);
            if (DT) {
                C1.trackClickEvents(DT, "rd", {
                    locale: M("pr_locale", DR),
                    pageId: M("pr_page_id", DR),
                    merchantId: M("pr_merchant_id", DR),
                    siteId: M("pr_site_id", DR),
                    engineVersion: "2",
                    inlineSEO: DS
                });
                C1.trackVisibility(DT, "rd", {
                    eventType: "snippet-visible",
                    locale: M("pr_locale", DR),
                    pageId: M("pr_page_id", DR),
                    merchantId: M("pr_merchant_id", DR),
                    siteId: M("pr_site_id", DR),
                    engineVersion: "2",
                    inlineSEO: DS
                });
            }
        }

        var Ct = 0;

        function BT(DQ, DS) {
            if (Ba(DQ, DS)) {
                var DR = C5(M("pr_page_id", DS));
                var i = X("pr_locale", DS);
                var DU = "pr-summary-snippet-" + DR;
                if (document.getElementById(DU)) {
                    CW(DR, i, DU, DS);
                } else {
                    var DT = "pr-summary-snippet-" + DR + "-" + (Ct++);
                    DQ.write('<div id="' + DT + '" class="pr-summary-snippet"></div>');
                    CW(DR, i, DT, DS);
                }
            }
        }

        E.display.summarySnippet = BT;

        function CW(DQ, i, DS, DR) {
            CD(DQ, i, function (DW) {
                var DT = M("pr_snippet_min_reviews", DR);
                var DV = 0;
                if (DW && DW.reviews) {
                    DV = DW.reviews.review_count;
                    if (DT <= DV) {
                        var DU = Z(DR) + "/content/" + k(DQ) + "/" + DQ + "-" + i + "-rollup.js";
                        if (M("pr_simplified_zip")) {
                            DU = Z(DR) + "/content/" + i + "/" + k(DQ) + "/" + i + "-rollup.js";
                        }
                        CY(DU, null, function (DX) {
                            if (DX.rollup) {
                                BE(DS, A6(DX.rollup, DQ, i, DR));
                            }
                        }, DR);
                    }
                }
            }, DR);
        }

        function A6(DW, DR, DQ, DU) {
            var i = [];
            var DT = Bs(DW);
            var DS = DT.histogramDisplayGroupList;
            var DV = DT.subratingGroupList;
            i.push('<div class="pr-summary-snippet-body">');
            if (DS.length) {
                i.push(AV(DS, DQ, DU));
            }
            if (DV.length) {
                i.push(Cj(DV, DQ, DU));
            }
            i.push('</div><div class="pr-clear"></div>');
            return i.join("");
        }

        function r(DQ, DS) {
            if (Ba(DQ, DS)) {
                var DT = C5(M("pr_merchant_user_id", DS));
                var i = X("pr_locale", DS);
                var DR = M("pr_nickname", DS);
                var DU = "pr-profile-" + DT;
                if (!document.getElementById(DU)) {
                    DQ.write('<div id="' + DU + '" class="pr-profile"></div>');
                }
                C0(DT, DR, i, DU, DS);
            }
        }

        E.display.profile = r;

        function C0(DT, DQ, i, DR, DS) {
            BP(DT, function (DU) {
                AQ(DU, function (DV) {
                    BE(DR, Cd(DV, {"nickname": DQ}, i, DS));
                }, DS);
            }, DS);
        }

        function G(DT, DR, DQ, i, DS) {
            AQ(DT, function (DV) {
                var DU = Cd(DV, {"nickname": "" + B9.encode(DR)}, i, DS);
                BD(DQ, DU);
            }, DS);
        }

        E.display.showProfile = G;

        function AR(DU, DQ, DT, i, DS) {
            var DR = {"w": 800, "h": 430};
            AQ(DU, function (DW) {
                var DV = Cd(DW, DT, i, DS);
                BD(DQ, DV, DR);
            }, DS);
        }

        E.display.showProfileWithHash = AR;

        function DB(DS, DU, i, DT, DV, DQ, DW, DX) {
            DQ = {"w": 545, "h": 275};
            var DR = AB(DS, DU, DT, DV, DX);
            BD(DU, DR, DQ, DW, function () {
                Cy(DU, DV);
            });
        }

        E.display.showFollowProfileModal = DB;

        function x(DR, DT, DS, DU, i, DV, DX) {
            var DW = document.getElementById(i);
            var DQ = AB(DR, DT, DS, DU, DX);
            BE(DV, DQ, function () {
                DK(DW, "pr-hidden");
                Cy(DT, DU);
            });
        }

        E.display.renderFollowProfileView = x;

        function Cy(DQ, i) {
            var DU = "pr-fb-follow-email-prompt-prepop";
            var DT = "Enter email address";
            var DS = "pr-fb-follow-email-" + i + "-" + DQ;
            var DR = document.getElementById(DS);
            if (DR != null) {
                s(DS, DT, DU);
                DR.onfocus = function () {
                    BL(DS, DT, DU);
                };
                DR.onblur = function () {
                    s(DS, DT, DU);
                };
            }
        }

        function AB(DR, DT, i, DU, DX) {
            var DS = i.nickname ? B9.decode(i.nickname) : "";
            var DV = i.location ? B9.decode(i.location) : "";
            var DW = i.fbid;
            var DQ = t(DR, DS, DV, DW, DT, DU, DX);
            return DQ;
        }

        function BR(DU, i, DR) {
            var DQ = M("pr_page_id", DR);
            var DT = M("pr_site_id", DR);
            B8(C5(DQ));
            if (POWERREVIEWS.widget) {
                var DS = {};
                DS.locale = i;
                DS.merchant_group_id = M("pr_merchant_group_id", DR);
                DS.profile_id = DU;
                DS.data_url_override = M("pr_widget_data_url_override", DR);
                if (DT) {
                    DS.site_id = BG(DT);
                }
                POWERREVIEWS.widget("socialloyalty.profile", DS);
            }
        }

        E.display.showIntegratedProfile = BR;

        function AQ(DR, DS, DQ) {
            if (DR) {
                var i = Z(DQ) + "/content/" + k("" + DR) + "/" + DR + "-profile.js";
                if (M("pr_simplified_zip")) {
                    i = Z(DQ) + "/content/" + locale + "/" + k("" + DR) + "/profile.js";
                }
                CY(i, null, function (DT) {
                    DS(DT && DT.p);
                    m({"type": "profile"}, DQ);
                }, DQ);
            } else {
                DS(null);
            }
        }

        var AK = {};

        function BP(DR, DS, DQ) {
            if (!AK[DR]) {
                var i = Z(DQ) + "/content/" + k(DR) + "/profile_contents.js";
                if (M("pr_simplified_zip")) {
                    i = Z(DQ) + "/content/" + locale + "/" + k(DR) + "/profile_contents.js";
                }
                CY(i, null, function (DT) {
                    DS(AK[DR] = DT && DT[DR]);
                }, DQ);
            } else {
                DS(AK[DR]);
            }
        }

        function Cd(DU, DT, i, DS) {
            var DR = DT.nickname ? B9.decode(DT.nickname) : "";
            var DQ = DT.location ? B9.decode(DT.location) : "";
            return Ce(DU, DR, DQ, DT.badges || [], i, DS);
        }

        function Ak(DR, DQ) {
            var DS = DR.length;
            var i = M("pr_nbr_displayed_profile_reviews", DQ);
            if (i) {
                i = parseInt(i);
                if (!isNaN(i) && (i > 0) && (DS > i) && DR.slice) {
                    return DR.slice(0, i);
                }
            }
            return DR;
        }

        function AY(DT, i, DQ) {
            var DR = Aw(DQ);
            var DS = BG(M("pr_site_id", DQ) || "-");
            return DR + "profile/" + i + "/" + M("pr_merchant_group_id", DQ) + "/" + DS + "/" + DT;
        }

        function Ce(DQ, i, DY, DZ, DW, Db) {
            var Dc = [];
            var DR = M("pr_page_id", Db);
            var DV = C5(DR);
            var DT = DQ.n || i;
            var DX = DQ.l || DY;
            if (DQ) {
                Dc.push('<div class="pr-profile-wrapper"><div class="pr-profile-author-container"><div class="pr-profile-author-information">');
                if (DQ.fu && (false)) {
                    Dc.push('<img class="pr-profile-fb-photo" src="https://graph.facebook.com/');
                    Dc.push(DQ.fu);
                    Dc.push('/picture" />');
                }
                if (DT) {
                    Dc.push('<p class="pr-profile-nickname">');
                    Dc.push(DT);
                    Dc.push("</p>");
                }
                Dc.push('<p class="pr-profile-location">');
                Dc.push(DX);
                Dc.push("</p>");
                var DS = C7(DZ);
                if (DS) {
                    Dc.push('<div class="pr-profile-badge-wrapper">');
                    Dc.push(Ae(DS, DW, Db));
                    Dc.push("</div>");
                }
                Dc.push("</div>");
                if (DQ.h) {
                    Dc.push('<div class="pr-profile-histogram-container"><p class="pr-profile-histogram-header"><span>');
                    Dc.push("Ratings Distribution");
                    Dc.push("</span></p>");
                    Dc.push(AJ(DQ.h, DW, "", Db, false));
                    Dc.push("</div>");
                }
                if (DQ.a) {
                    Dc.push('<div class="pr-review-author-affinity-wrapper"><p class="pr-review-author-affinities">');
                    Dc.push("About Me");
                    Dc.push(":<br /><span>");
                    Dc.push(DQ.a.join(", "));
                    Dc.push("</span></p></div>");
                }
                if (false) {
                    Dc.push('<div class="pr-profile-fb-manage-settings">');
                    var Da = y({"locale": DW, "profileId": DQ.id}, Db);
                    Dc.push('<a href="#" onclick="POWERREVIEWS.common.showSmallPopup(\'');
                    Dc.push(Da);
                    Dc.push("', 425, 600, {'location':'no'}); return false;\">");
                    Dc.push("Is this you? Manage Settings");
                    Dc.push("</a></div>");
                }
                Dc.push("</div>");
                var DU = Ak(DQ.rs, Db);
                Dc.push('<div class="pr-profile-reviews-container"><p class="pr-profile-reviews-header"><span>');
                Dc.push("My Reviews");
                Dc.push("</span></p>");
                if (DU.length < DQ.r) {
                    Dc.push("<p>");
                    Dc.push("{0} most recent reviews".replace("{0}", DU.length));
                    Dc.push("</p>");
                }
                Dc.push('<div class="pr-profile-reviews-wrapper">');
                Dc.push(Bc(DU, "", DW, "", null, "", DQ.rs.length, 100000, 1, "", "", true, "", Db));
                Dc.push('</div></div><div class="pr-clear"></div></div>');
            }
            Dc.push("<!-- bickety -->");
            return Dc.join("");
        }

        function t(DR, DT, DX, DY, DV, DW, Da) {
            var Db = [];
            var DQ = AY(DR, DW, Da);
            var DZ = window.location.protocol;
            var DS = false;
            if (DY && (false)) {
                var DU = true;
            }
            var i = "All";
            Db.push('<div id="pr-fb-follow-wrapper-');
            Db.push(DW);
            Db.push("-");
            Db.push(DV);
            Db.push('" class="pr-fb-follow-contentwrapper pr-fb-follow-category"><div class="pr-fb-follow-body"><p class="pr-fb-follow-modal-header">');
            Db.push("Follow this Reviewer");
            Db.push('</p><div class="pr-fb-follow-content pr-fb-follow-body-left"><div class="pr-fb-follow-content-wrapper"><div class="pr-fb-follow-info">');
            if (DU) {
                Db.push('<img src="https://graph.facebook.com/');
                Db.push(DY);
                Db.push('/picture" />');
            } else {
                Db.push('<img src="http://images.powerreviews.com/images/avatar-grey.gif" style="max-width:50px;" />');
            }
            if (DT) {
                Db.push('<p><span class="pr-emphasis pr-fb-follow-name">');
                Db.push(DT);
                Db.push("</span> ");
                Db.push("from");
                Db.push(' <span class="pr-emphasis pr-fb-follow-location">');
                Db.push(DX);
                Db.push("</span></p>");
            }
            Db.push('</div></div></div><div class="pr-fb-follow-info pr-fb-follow-body-right"><div id="pr-fb-follow-info-wrapper-');
            Db.push(DW);
            Db.push("-");
            Db.push(DV);
            Db.push('" class="pr-fb-follow-info-wrapper"><p class="pr-reset">');
            if (i == "Facebook" || i == "All") {
                Db.push("<b>Click the Like button</b> to follow on Facebook OR enter your email. See the latest reviews this reviewer writes on your Facebook News Feed or by email. You can unsubscribe anytime.");
            }
            if (i == "Email") {
                Db.push("Enter your email to get the latest reviews this reviewer writes. You can unsubscribe anytime.");
            }
            Db.push('</p></div></div><div class="pr-clear"></div></div><div class="pr-fb-follow-footer">');
            if (i == "Facebook" || i == "All") {
                Db.push('<div class="pr-fb-follow-cta-like pr-fb-follow-body-left"><div class="pr-fb-follow-cta-like-wrapper"><p class="pr-fb-follow-on-facebook pr-fb-link-med">');
                Db.push("Follow on <span>Facebook</span>");
                Db.push('</p><div class="pr-fb-likebtn-wrapper"><iframe class="pr-fb-likebtn" src="');
                Db.push(DZ);
                Db.push("//www.facebook.com/plugins/like.php?href=");
                Db.push(DQ);
                Db.push('&layout=button_count&show_faces=false" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div></div></div>');
            }
            if (i == "Email" || i == "All") {
                Db.push('<div class="pr-fb-follow-cta-email pr-fb-follow-body-right"><div class="pr-fb-follow-cta-email-wrapper"><span class="pr-error-msg pr-hidden" id="pr-fb-follow-errorMsg-');
                Db.push(DW);
                Db.push("-");
                Db.push(DV);
                Db.push('">');
                Db.push("Please enter a valid email address.");
                Db.push('</span><input type="text" id="pr-fb-follow-email-');
                Db.push(DW);
                Db.push("-");
                Db.push(DV);
                Db.push('" class="pr-fb-follow-email-input" /><a href="#" onclick="POWERREVIEWS.common.validateAndProcessEmail(this, POWERREVIEWS.common.getOptions(\'');
                Db.push(Ah(Da));
                Db.push('\'));return false" class="pr-fb-follow-submit-btn pr-fb-follow-submit-link" prData=\'{"type":"productEmailFollower","keyValue":"');
                Db.push(DV);
                Db.push('","merchantGroupId":"');
                Db.push(17731);
                Db.push('","pageId":"');
                Db.push(DV);
                Db.push('","locale":"');
                Db.push(DW);
                Db.push('","siteId":"');
                Db.push(BG(M("pr_site_id", Da) || "-"));
                Db.push('","target":"pr-fb-follow-email-');
                Db.push(DW);
                Db.push("-");
                Db.push(DV);
                Db.push("\"}' >");
                Db.push("SUBMIT");
                Db.push("</a></div></div>");
            }
            Db.push('<div class="pr-clear"></div></div></div>');
            return Db.join("");
        }

        function Bi(D0, Df) {
            var D2 = window, DX = D2.document, Dd = DX.location, Dj = null, D1 = encodeURIComponent || escape,
                D8 = decodeURIComponent || unescape, DT = Object.prototype.toString, Db = 10,
                DR = "__pr." + parseInt(D0.merchantGroupId).toString(36), DQ = 60 * 60 * 24 * 365 * 2,
                Dw = "//t.powerreviews.com/t/v1.gif", Dv = D5({
                    event: "e",
                    eventType: "et",
                    userId: "uid",
                    time: "t",
                    locale: "l",
                    merchantGroupId: "mgid",
                    merchantId: "mid",
                    pageId: "pid",
                    siteId: "sid",
                    pageUrl: "p",
                    referrerUrl: "r",
                    orderId: "oid",
                    orderSubtotal: "os",
                    orderNumberOfItems: "on",
                    orderItems: "oi",
                    merchantUserId: "muid",
                    userEmail: "ue",
                    userFirstName: "uf",
                    userLastName: "ul",
                    userFullName: "un",
                    marketingOptIn: "mo"
                }, D0.parameterAbbreviations || {}), Dh = "array", EC = "boolean";

            function D5() {
                var EF = {}, EH, EI;
                for (var EG = 0, EE = arguments.length; EG < EE; EG++) {
                    for (EH in arguments[EG]) {
                        EI = arguments[EG][EH];
                        if (EI !== Df) {
                            EF[EH] = EI;
                        }
                    }
                }
                return EF;
            }

            function DZ(EE) {
                return EE.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1");
            }

            function DU(EG) {
                var EE = EG;
                var EF = document.createElement("div");
                if (EG && typeof EG === "string") {
                    EG = EG.replace(/[<][s][c][r][i][p][t][^>]*>([\S\s]*?)<\/[s][c][r][i][p][t][>]/gmi, "");
                    EG = EG.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, "");
                    EF.innerHTML = EG;
                    EG = EF.textContent || EF.innerText;
                    EF.textContent = "";
                }
                if (EG === "" || typeof EG === "undefined" || EG === null) {
                    return EE;
                }
                return EG;
            }

            function DW(EE) {
                var EF = DX.cookie.match("(?:^|;)\\s*" + DZ(EE) + "=([^;]*)");
                return (EF) ? D8(EF[1]) : null;
            }

            function De(EG, EJ, EH, EI) {
                var EF = new Date(), EE = EF;
                EE.setTime(EF.getTime() + EH * 1000);
                DX.cookie = EG + "=" + D1(EJ) + ";expires=" + EE.toGMTString() + ";path=/" + (EI ? ";domain=" + EI : "");
            }

            function EA() {
                return D0.trackingPixelUrl || Dw;
            }

            function Da(EE) {
                if (typeof EE !== "object") {
                    return typeof EE;
                }
                if (EE === null) {
                    return "null";
                }
                return DT.call(EE).match(/\[object\s(\w+)\]/)[1].toLowerCase();
            }

            function DY(EF, EE) {
                return Da(EF) === EE;
            }

            function D6(EE) {
                return EE !== Df && EE !== null && EE !== "" && EE !== Number.NaN;
            }

            var Do = [";", ","];

            function Dm(EG, EH) {
                var EE = [], EF;
                EH = EH || 0;
                if (DY(EG, Dh) && EH < Do.length) {
                    for (EF = 0; EF < EG.length; EF++) {
                        EE.push(Dm(EG[EF], EH + 1));
                    }
                    return EE.join(Do[EH]);
                } else {
                    if (DY(EG, EC)) {
                        return EG ? "y" : "n";
                    } else {
                        if (D6(EG)) {
                            return D1(DU(D8(EG)));
                        } else {
                            return "";
                        }
                    }
                }
            }

            function DS(EI) {
                var EG = [], EF, EH, EE;
                for (EF in EI) {
                    EH = EI[EF];
                    if (D6(EH)) {
                        EG.push(D1(Dv[EF] || EF) + "=" + Dm(EH));
                    }
                }
                return EG.join("&");
            }

            function Dq(EE, EF) {
                var EG = EE;
                new Image().src = EG + "?" + DS(EF);
            }

            function Dy(EH) {
                var EE = [];
                var EG = ["r", "a", "n", "d", "o", "m"].join("");
                for (var EF = 0; EF < EH; EF++) {
                    EE.push((Math[EG]() * 36 | 0).toString(36));
                }
                return EE.join("");
            }

            function Di() {
                return ((Date.now && typeof Date.now() === "number") ? Date.now() : +new Date).toString(36);
            }

            function D7() {
                return Dd.href;
            }

            function Dz() {
                return DX.referrer;
            }

            function Du() {
                var EE = D0.userTrackingDomain;
                EE = EE && EE.replace(/^\s+|\s+$/g, "");
                if (EE) {
                    if (EE.charAt(0) !== ".") {
                        EE = "." + EE;
                    }
                    return EE;
                }
                return null;
            }

            function ED(EF, EG, EE) {
                if (EF.addEventListener) {
                    EF.addEventListener(EG, EE, false);
                } else {
                    if (EF.attachEvent) {
                        EF.attachEvent("on" + EG, function () {
                            EE.call(EF);
                        });
                    }
                }
            }

            function DV(EF, EG, EE) {
                if (EF.removeEventListener) {
                    EF.removeEventListener(EG, EE, false);
                } else {
                    if (EF.detachEvent) {
                        EF.detachEvent("on" + EG, EE);
                    }
                }
            }

            function Dc(EF) {
                var EG = EF || window.event, EE = false;
                if (EG.target) {
                    EE = EG.target;
                } else {
                    if (EG.srcElement) {
                        EE = EG.srcElement;
                    } else {
                        EE = document;
                    }
                }
                if (EE.nodeType == 3) {
                    EE = EE.parentNode;
                }
                return EE;
            }

            function D4(EE, EH, EG) {
                var EF = EE;
                while (EF && EF !== EH.parentNode && EF.nodeType !== 9) {
                    if (EF.nodeType === 1 && EG(EF)) {
                        return EF;
                    }
                    EF = EF.parentNode;
                }
                return false;
            }

            function Dp(EK) {
                var EK = EK || document, EF = EK.documentElement, EH = EK.body,
                    EJ = window.pageYOffset || Math.max(EF.scrollTop, EH.scrollTop),
                    EI = window.pageXOffset || Math.max(EF.scrollLeft, EH.scrollLeft),
                    EG = Math.max(EF.clientWidth, EH.clientWidth), EE = Math.max(EF.clientHeight, EH.clientHeight);
                return {top: EJ, left: EI, bottom: EJ + EE, right: EI + EG, width: EG, height: EE};
            }

            function Dt(EF, EE) {
                var EH = EF.left, EN = EF.top, EL = EE.left, EJ = EE.top, EG = EH + EF.width, EM = EN + EF.height,
                    EK = EL + EE.width, EI = EJ + EE.height;
                if (EH < EL) {
                    EH = EL;
                }
                if (EN < EJ) {
                    EN = EJ;
                }
                if (EG > EK) {
                    EG = EK;
                }
                if (EM > EI) {
                    EM = EI;
                }
                return {top: EN, left: EH, bottom: EM, right: EG, height: EM - EN, width: EG - EH};
            }

            function Dx(EH) {
                if (EH.offsetWidth === 0 || EH.offsetHeight === 0) {
                    return false;
                }
                var EE = Dp(), EG = EH.getBoundingClientRect(), EF = {
                    top: EG.top + EE.top,
                    bottom: EG.bottom + EE.top,
                    left: EG.left + EE.left,
                    right: EG.right + EE.left,
                    width: EG.right - EG.left,
                    height: EG.bottom - EG.top
                };
                var EI = Dt(EE, EF);
                if ((EI.width * EI.height) / (EF.width * EF.height) < 0.5) {
                    return false;
                }
                if (D4(document.elementFromPoint((EG.left + EG.right) / 2, (EG.top + EG.bottom) / 2), EH, function (EJ) {
                        return EJ === EH;
                    })) {
                    return true;
                }
                return false;
            }

            var Dl = [];
            var EB = false;

            function i() {
                var EF = 0, EG;
                for (var EE = 0; EE < Dl.length; EE++) {
                    if (Dl[EE]) {
                        EF++;
                        EG = Dl[EE]();
                        if (EG) {
                            Dl[EE] = false;
                        }
                    }
                }
                if (EF === 0) {
                    clearInterval(EB);
                    EB = false;
                    Dl = [];
                    DV(window, "scroll", i);
                    DV(window, "resize", i);
                }
            }

            function D3() {
                var EE = DW(DR);
                if (!EE) {
                    EE = Dy(Db);
                }
                De(DR, EE, DQ, Du());
                return EE;
            }

            function Dk(EE, EF) {
                Ds(EE, D5({pageUrl: D7(), referrerUrl: Dz()}, EF));
            }

            function Ds(EF, EH) {
                var EE = D3();
                var EG = {event: EF, id: Dy(Db), time: Di(), userId: EE, merchantGroupId: D0.merchantGroupId};
                EG = D5(EG, EH);
                if (D0.delayFire === "true" || EG.delay === "true") {
                    if (EG.delay) {
                        delete EG.delay;
                    }
                    if (DX.readyState === "complete") {
                        Dq(EA(), EG);
                        return;
                    }
                    if (D2.addEventListener) {
                        D2.addEventListener("load", function () {
                            Dq(EA(), EG);
                        }, false);
                    } else {
                        if (D2.attachEvent) {
                            D2.attachEvent("onload", function () {
                                Dq(EA(), EG);
                            });
                        }
                    }
                } else {
                    if (EG.delay) {
                        delete EG.delay;
                    }
                    Dq(EA(), EG);
                }
                Dj = EH;
            }

            function Dn(EG, EI, EJ) {
                var EF = DY(EG, Dh) ? EG : [EG], EH = "data-pr-event";

                function EK(EO) {
                    var EM = Dc(EO);
                    var EL = D4(EM, this, function (EP) {
                        return EP && EP.getAttribute(EH);
                    });
                    if (EL) {
                        var EN = EL.getAttribute(EH);
                        Dk(EI, D5({eventType: EN}, EJ));
                    }
                }

                for (var EE = 0; EE < EF.length; EE++) {
                    ED(EF[EE], "click", EK);
                }
            }

            function D9(EF, EG, EI) {
                if (DY(EF, Dh)) {
                    for (var EE = 0; EE < EF.length; EE++) {
                        D9(EF[EE], EG, EI);
                    }
                } else {
                    var EH = function () {
                        if (Dx(EF)) {
                            Dk(EG, EI);
                            return true;
                        }
                        return false;
                    };
                    if (!EH()) {
                        Dl.push(EH);
                        if (!EB) {
                            EB = setInterval(i, 1000);
                            ED(window, "scroll", i);
                            ED(window, "resize", i);
                        }
                    }
                }
            }

            function Dg() {
                var EE = D5(Dj, D0);
                var EG = EE.orderItems;
                var EH = function () {
                    var EJ = [];
                    var EK = EG[0];
                    if (EG.length > 0) {
                        EG.map(function (EL, EN) {
                            var EO = EL.slice(-1)[0];
                            var EM = parseFloat(EO);
                            EJ.push(EM);
                            var EP = EJ[(EN - 1)];
                            if (EM > EP) {
                                EK = EL;
                            }
                        });
                    }
                    return EK;
                };
                var EF = {singleOrderitem: EH(), page_id: EH()[0], page_id_variant: EH()[1]};
                var EI = D5(EF, EE);
                return EI;
            }

            function Dr(EI) {
                var EM = ["merchantGroupId", "merchantId", "locale", "merchantUserId", "userEmail", "userFirstName", "userLastName", "orderId", "orderItems"];
                var EP = ["page_id", "quantity", "unit_price"];
                var EJ = EM.filter(function EK(EQ) {
                    if (!EI[EQ]) {
                        return EQ;
                    }
                });
                if (!(typeof EI.marketingOptIn === "boolean")) {
                    throw new Error("PowerReviews checkout() error - marketingOptIn value provided is not valid");
                }
                if (EJ.length > 0) {
                    throw new Error("PowerReviews checkout() error - " + EJ.join(", ") + " provided is not valid");
                }
                var EL = function EL(EQ) {
                    return EP.filter(function (ES) {
                        var ER = !isNaN(Number(EQ[ES])) && EQ[ES];
                        if (!EQ[ES] || ES === "quantity" && !ER || ES === "unit_price" && !ER) {
                            return ES;
                        }
                    });
                };
                var EO = EI.orderItems.filter(function (EQ) {
                    return EL(EQ).length > 0;
                }).map(function (ER, EQ) {
                    var ES = EL(ER);
                    return "Order Item #" + (EQ + 1) + " has invalid fields - " + ES.join(", ");
                });
                if (EO.length > 0) {
                    throw new Error("PowerReviews checkout() error - " + EO.join(" || "));
                }
                var EG = function EG(ES) {
                    var EQ = ES.page_id;
                    var ET = ES.page_id_variant;
                    var EU = ES.product_name;
                    var EV = ES.quantity;
                    var ER = ES.unit_price;
                    return {page_id: EQ, page_id_variant: ET, product_name: EU, quantity: EV, unit_price: ER};
                };
                var EH = function (ES, EQ, ER) {
                    ER = [];
                    for (EQ in ES) {
                        ER.hasOwnProperty.call(ES, EQ) && ER.push(EQ);
                    }
                    return ER;
                };
                var EN = function EN(EQ) {
                    return EH(EQ).map(function (ER) {
                        return EQ[ER];
                    });
                };
                var EF = "c";
                var EE = {
                    merchantGroupId: EI.merchantGroupId,
                    merchantId: EI.merchantId,
                    locale: EI.locale,
                    merchantUserId: EI.merchantUserId,
                    marketingOptIn: EI.marketingOptIn,
                    userEmail: EI.userEmail,
                    userFirstName: EI.userFirstName,
                    userLastName: EI.userLastName,
                    orderId: EI.orderId,
                    orderSubtotal: EI.orderItems.reduce(function (ER, EQ) {
                        return ER + EQ.unit_price * EQ.quantity;
                    }, 0),
                    orderNumberOfItems: EI.orderItems.reduce(function (ER, EQ) {
                        return ER + EQ.quantity;
                    }, 0),
                    orderItems: EI.orderItems.map(function (EQ) {
                        return EN(EG(EQ));
                    })
                };
                return Dk(EF, EE);
            }

            return {
                trackEvent: Ds,
                trackCheckout: Dr,
                getConfig: Dg,
                trackPageview: Dk,
                trackClickEvents: Dn,
                trackVisibility: D9,
                isElementVisible: Dx,
                getUID: D3
            };
        }

        if (window.document && window.location) {
            var By = {
                delayFire: "false",
                merchantGroupId: 17731,
                userTrackingDomain: "",
                trackingPixelUrl: "//t.powerreviews.com/t/v1.gif",
                parameterAbbreviations: {
                    reviewCount: "rc",
                    starRating: "s",
                    inlineSEO: "i",
                    engineVersion: "v",
                    questionCount: "qc",
                    answerCount: "ac",
                    visible: "vis",
                    synMerchantId: "symid",
                    synSharedReviewIds: "sysrids",
                    synReviewsOnPageCount: "syropc"
                }
            };
            var C1 = Bi(By);
            E.tracker = {getUID: C1.getUID, trackCheckout: C1.trackCheckout};
        }
        if (!!M("pr_snippet_style") && M("pr_snippet_style") !== "LEGACY" && !document.getElementById("pwr-ui")) {
            (function (DS, DT, i, DR, DQ) {
                DS.PowerReviews = {};
                DR = DT.createElement(i);
                DQ = DT.getElementsByTagName("head")[0];
                DR.src = E.getWARServerPath() + "/ui.js";
                DR.id = "pwr-ui";
                DQ.appendChild(DR, DQ);
            }(window, document, "script"));
        }
        return E;
    })(window.POWERREVIEWS);
