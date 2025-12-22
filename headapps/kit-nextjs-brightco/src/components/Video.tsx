import { ComponentProps } from '@/lib/component-props';
import {
  ImageField,
  LinkField,
  Image as ContentSdkImage,
  TextField,
  Text as ContentSdkText,
} from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';

interface VideoParams {
  darkPlayIcon?: string;
  useModal?: string;
  displayIcon?: string;
}

interface VideoFields {
  video?: LinkField;
  image?: ImageField;
  image2?: ImageField;
  title?: TextField;
  caption?: TextField;
}

interface VideoComponentFields {
  params?: VideoParams;
  fields?: VideoFields;
}

type VideoComponentProps = ComponentProps & VideoComponentFields;

const VideoPlayer = ({ videoUrl, image }: { videoUrl?: string; image?: ImageField }) => {
  if (!videoUrl) return null;

  return (
    <div className="relative w-full aspect-video">
      {image && (
        <ContentSdkImage field={image} className="w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors"
          aria-label="Play video"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            className="ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export function Default({ fields, params }: VideoComponentProps) {
  if (fields) {
    const videoUrl = fields.video?.value?.href;

    return (
      <section className={`relative lg:mt-16 lg:py-16 ${params?.styles}`} data-class-change>
        <div className="container grid lg:grid-cols-2 gap-4 lg:gap-16 px-4 py-12 lg:py-16 mx-auto text-center lg:text-left">
          {fields.title && (
            <h3 className="text-xl lg:text-3xl leading-loose tracking-tight uppercase">
              <ContentSdkText field={fields.title} />
            </h3>
          )}
          {fields.caption && (
            <div className="text-base lg:text-lg leading-8 tracking-normal">
              <ContentSdkText field={fields.caption} />
            </div>
          )}
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 z-10">
            <ContentSdkImage field={fields.image2} className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center justify-center w-full px-4 py-12 lg:py-16 backdrop-blur-md bg-[linear-gradient(136deg, rgba(255, 255, 255, 0.08) 2.61%, rgba(255, 255, 255, 0.15) 73.95%)] z-20">
            <div className="container mx-auto">
              <VideoPlayer videoUrl={videoUrl} image={fields.image} />
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <NoDataFallback componentName="Video" />;
}

export function TextCenter({ fields, params }: VideoComponentProps) {
  if (fields) {
    const videoUrl = fields.video?.value?.href;

    return (
      <section className={`relative ${params?.styles}`} data-class-change>
        <div className="flex flex-col items-center gap-4 max-w-3xl px-4 py-12 lg:py-16 mx-auto text-center">
          {fields.title && (
            <h3 className="lg:px-10 text-xl lg:text-3xl leading-loose tracking-normal uppercase">
              <ContentSdkText field={fields.title} />
            </h3>
          )}
          {fields.caption && (
            <div className="text-base lg:text-lg leading-8 tracking-normal">
              <ContentSdkText field={fields.caption} />
            </div>
          )}
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 z-10">
            <ContentSdkImage field={fields.image2} className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center justify-center w-full px-4 py-12 lg:py-16 backdrop-blur-md bg-[linear-gradient(136deg, rgba(255, 255, 255, 0.08) 2.61%, rgba(255, 255, 255, 0.15) 73.95%)] z-20">
            <div className="container mx-auto">
              <VideoPlayer videoUrl={videoUrl} image={fields.image} />
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <NoDataFallback componentName="Video" />;
}

