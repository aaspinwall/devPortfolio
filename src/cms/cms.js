import CMS from "netlify-cms-app"
//import uploadcare from 'netlify-cms-media-library-uploadcare'
//import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from "./preview-templates/AboutPagePreview"

//CMS.registerMediaLibrary(uploadcare)
//CMS.registerMediaLibrary(cloudinary)

//CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
//CMS.registerPreviewTemplate('products', ProductPagePreview)
//CMS.registerPreviewTemplate('blog', BlogPostPreview)
