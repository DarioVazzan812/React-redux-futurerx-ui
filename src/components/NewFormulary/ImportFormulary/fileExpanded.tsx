import React from 'react';
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { DetailsRequest, loadImportFileDetails } from '../../../redux/slices/formulary/import_export/formularyImportSlice';
import {import_Formulary} from '../../../redux/slices/formulary/importFL/importFLSlice';
import {
    ChangeErrorRequest,
    loadChangeReports,
    loadErrorDetails
} from "../../../redux/slices/formulary/import_export/formularyImportSlice";
class FileExpanded extends React.Component<any,any>{
    state = {
        isDetail: false,
        formulary_id: this.props.formulary_id,
        file_id: this.props.file_id,
        fileDetails: [] as any[],
        isShow: false,
        fileName: 'File Name'
    }
    componentDidMount(){
        let requestDetails:DetailsRequest = {
            id_formulary: this.props.formulary_id,
            id_formulary_file: this.props.file_id,
            index: 0,
            limit: 10
        };
        this.props.loadImportFileDetails(requestDetails)
    }
    UNSAFE_componentWillReceiveProps(newProps){
        if(newProps.importFileDetails){
            this.setState({
                fileDetails: newProps.importFileDetails
            })
        }
    }
    showDetails = (id,filename) => {
        this.props.isShowDetailsHandler(id,filename)
    }
    renderData = () => {
        const rowDetails = this.state?.fileDetails?.map(e => {
            return (
                <div className="row-details">
                    <div className="file-name">{e.import_file_name}</div>
                    <div className="status">
                        {e.import_status === 'success' ? (
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 0C4.25379 0 0 4.25379 0 9.5C0 14.7462 4.25379 19 9.5 19C14.7462 19 19 14.7462 19 9.5C19 4.25379 14.7462 0 9.5 0ZM13.6032 6.39766L9.13739 12.5896C9.07497 12.6767 8.99269 12.7477 8.89736 12.7967C8.80203 12.8457 8.6964 12.8712 8.58923 12.8712C8.48206 12.8712 8.37643 12.8457 8.2811 12.7967C8.18577 12.7477 8.10349 12.6767 8.04107 12.5896L5.39676 8.92533C5.31618 8.81295 5.39676 8.65603 5.5346 8.65603H6.52913C6.74542 8.65603 6.95112 8.75993 7.07835 8.93806L8.58817 11.0331L11.9217 6.41038C12.0489 6.23437 12.2525 6.12835 12.4709 6.12835H13.4654C13.6032 6.12835 13.6838 6.28527 13.6032 6.39766Z" fill="#80C483"/>
                            </svg>
                        ) : (
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 0C4.26175 0 0 4.26175 0 9.5C0 14.7382 4.26175 19 9.5 19C14.7382 19 19 14.7382 19 9.5C19 4.26175 14.7382 0 9.5 0ZM12.9396 11.9065C13.0104 11.9737 13.0669 12.0544 13.106 12.1437C13.145 12.2331 13.1658 12.3294 13.167 12.427C13.1683 12.5245 13.15 12.6213 13.1132 12.7116C13.0765 12.802 13.022 12.8841 12.953 12.953C12.8841 13.022 12.802 13.0765 12.7116 13.1132C12.6213 13.15 12.5245 13.1683 12.427 13.167C12.3294 13.1658 12.2331 13.145 12.1437 13.106C12.0544 13.0669 11.9737 13.0104 11.9065 12.9396L9.5 10.5336L7.09349 12.9396C6.95532 13.0709 6.77135 13.143 6.5808 13.1406C6.39024 13.1381 6.20818 13.0613 6.07342 12.9266C5.93867 12.7918 5.86188 12.6098 5.85944 12.4192C5.857 12.2286 5.9291 12.0447 6.06036 11.9065L8.46642 9.5L6.06036 7.09349C5.9291 6.95532 5.857 6.77135 5.85944 6.5808C5.86188 6.39024 5.93867 6.20818 6.07342 6.07342C6.20818 5.93867 6.39024 5.86188 6.5808 5.85944C6.77135 5.857 6.95532 5.9291 7.09349 6.06036L9.5 8.46642L11.9065 6.06036C12.0447 5.9291 12.2286 5.857 12.4192 5.85944C12.6098 5.86188 12.7918 5.93867 12.9266 6.07342C13.0613 6.20818 13.1381 6.39024 13.1406 6.5808C13.143 6.77135 13.0709 6.95532 12.9396 7.09349L10.5336 9.5L12.9396 11.9065Z" fill="#E76262"/>
                            </svg>
                        )}
                    </div>
                    <div className="load-details" onClick={() => this.showDetails(e.id_formulary_import,e.import_file_name)}>
                        Details
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.33333 3.58333C7.22283 3.58333 7.11685 3.62723 7.0387 3.70537C6.96057 3.78351 6.91667 3.88949 6.91667 4V6.5C6.91667 6.61051 6.87277 6.71649 6.79463 6.79463C6.71649 6.87277 6.61051 6.91667 6.5 6.91667H1.5C1.38949 6.91667 1.28351 6.87277 1.20537 6.79463C1.12723 6.71649 1.08333 6.61051 1.08333 6.5V1.5C1.08333 1.38949 1.12723 1.28351 1.20537 1.20537C1.28351 1.12723 1.38949 1.08333 1.5 1.08333H4C4.11051 1.08333 4.21649 1.03943 4.29463 0.961294C4.37277 0.883154 4.41667 0.777174 4.41667 0.666667C4.41667 0.55616 4.37277 0.450179 4.29463 0.372039C4.21649 0.293899 4.11051 0.25 4 0.25H1.5C1.16848 0.25 0.850537 0.381696 0.616117 0.616117C0.381696 0.850537 0.25 1.16848 0.25 1.5V6.5C0.25 6.83152 0.381696 7.14946 0.616117 7.38388C0.850537 7.6183 1.16848 7.75 1.5 7.75H6.5C6.83152 7.75 7.14946 7.6183 7.38388 7.38388C7.6183 7.14946 7.75 6.83152 7.75 6.5V4C7.75 3.88949 7.7061 3.78351 7.62796 3.70537C7.54982 3.62723 7.44384 3.58333 7.33333 3.58333Z" fill="#1D54B4"/>
                        <path d="M5.66583 1.08333H6.32416L3.70333 3.7C3.66427 3.73873 3.63328 3.78482 3.61212 3.83559C3.59097 3.88637 3.58008 3.94083 3.58008 3.99583C3.58008 4.05084 3.59097 4.1053 3.61212 4.15607C3.63328 4.20685 3.66427 4.25293 3.70333 4.29167C3.74206 4.33072 3.78815 4.36172 3.83892 4.38287C3.8897 4.40403 3.94416 4.41492 3.99916 4.41492C4.05417 4.41492 4.10863 4.40403 4.1594 4.38287C4.21018 4.36172 4.25626 4.33072 4.29499 4.29167L6.91583 1.675V2.33333C6.91583 2.44384 6.95973 2.54982 7.03787 2.62796C7.11601 2.7061 7.22199 2.75 7.33249 2.75C7.443 2.75 7.54898 2.7061 7.62712 2.62796C7.70526 2.54982 7.74916 2.44384 7.74916 2.33333V0.666667C7.74916 0.55616 7.70526 0.450179 7.62712 0.372039C7.54898 0.293899 7.443 0.25 7.33249 0.25H5.66583C5.55532 0.25 5.44934 0.293899 5.3712 0.372039C5.29306 0.450179 5.24916 0.55616 5.24916 0.666667C5.24916 0.777174 5.29306 0.883154 5.3712 0.961294C5.44934 1.03943 5.55532 1.08333 5.66583 1.08333Z" fill="#1D54B4"/>
                        </svg>

                    </div>
                    <div className="user"><span></span></div>
                    <div className="date">{e.date_time}</div>
                </div>
            )
        });
        return rowDetails;
    }
    uploadFile = (e) => {
        this.fileUpload(e.target.files[0]).then(response => {
            console.log(response)
        }).catch(error => console.log(error));
    }
    fileUpload(file){
        const formData = new FormData();
        formData.append('file',file);
        const newObj = {
            flID: this.props.formulary_id,
            loadKeyType: this.props.loadKeyType,
            form_data: formData,
            changesOnly: this.props.changesOnlyList
        }
        return this.props.import_Formulary(newObj)
    }
    render(){
        return (
            <>
                <div className="expanded-data">
                    <Grid container>
                        <Grid item xs={8} className="left-side">
                            <div className="row-details top">
                                <div className="label file-name">FILE NAME</div>
                                <div className="label status">STATUS</div>
                                <div className="label load-details">LOAD DETAILS</div>
                                <div className="label user">USER</div>
                                <div className="label date">DATE/TIME</div>
                            </div>
                            {this.state.fileDetails.length > 0 ? this.renderData() : null}
                        </Grid>
                        <Grid item xs={4}>
                            <div className="drag-drop-upload">
                                <label htmlFor="file-input">
                                    <p>Drop file here or click to upload</p>
                                    <p>txt, csv, etc, TXT, CSV, ETC files accepted.</p>
                                    <p>Max file size: 10MB</p>
                                </label>
                                <input id="file-input" type="file" onChange={this.uploadFile}/>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mode: state?.setup?.mode,
        importFiles: state?.import?.importFiles,
        importFileDetails: state?.import?.importFileDetails
    };
};
function mapDispatchToProps(dispatch) {
    return {
        loadImportFileDetails: (arg) => dispatch(loadImportFileDetails(arg)),
        import_Formulary: (a) => dispatch(import_Formulary(a)),
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(FileExpanded);
