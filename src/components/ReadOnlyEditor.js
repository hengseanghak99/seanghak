import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ReadOnlyEditor = ({ content }) => {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={content}
            disabled={true}
            config={{
                toolbar: [],  // Disabling toolbar, optional
            }}
        />
    );
};

export default ReadOnlyEditor;
