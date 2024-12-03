function showTypes() {
    const typesDocumentation = document.getElementById ('types_documentation');
        typesDocumentation.innerHTML ='<ol> <li><strong>Technical Documentation:</strong> <ul> <li><strong>Source code:</strong> add comments to explain the functionalities of the code</li> <li><strong>API Documentation:</strong> it is the descriptions of the methods, parameters and answers in an application programming interface</li> <li><strong>technical specification:</strong> tells the details of the implementing, architecture and design</li> </ul> </li> </br> <li><strong>User Documentation:</strong> <ul> <li><strong>User book:</strong> Instructions about how to operate the system</li> <li><strong>Installation guide:</strong> Instructions about how to install and configure the system</li> <li><strong>FAQ:</strong> often questions and common answers</li> </ul> </li> </br> <li><strong>Project Documentation</strong> <ul> <li><strong>Project Plan:</strong> Objectives, project schedule, resources, risks</li> <li><strong>Progress Report:</strong> periodical updates</li> <li><strong>Requirements Documentation:</strong> specification of the needs (needed elements, functions...)</li> </ul> </li> </br> <li><strong>Process Documentation:</strong> <ul> <li><strong>Operational Procedures:</strong> work flux</li> <li><strong>Security and Safety Policy:</strong> Guidelines for data protection</li> <li><strong>Contingency Plan:</strong> Strategies for emergencies.</li> </ul> </li> </ol>';
        

}

function popularTools() {
    const popular_Tool = document.getElementById ('popular_tools');
        popular_Tool.innerHTML = '<ol><li><strong>Doxygen:</strong> automatic generation of documentation</li><li><strong>Javadoc:</strong> documentation of a JAVA code</li><li><strong>Markdown:</strong> simple formatation for texts</li><li><strong>Confluence:</strong> platforma for colaborative work/contribution</li><li><strong>Swagger:</strong> documentation for APIs</li></ol>';
                    
}

function goodPractices() {
    const good_Practice = document.getElementById ('good_practices');
        popular_Tool.innerHTML = '<ol><li><strong>Update regularly:</strong> Keep documentation up to date.</li><li><strong>Be concise:</strong> Avoid unnecessary information.</li><li><strong>Use clear language:</strong> Avoid technical jargon.</li><li><strong>Include examples:</strong>Illustrate concepts with examples</li><li><strong>Revisit periodically:</strong> Check accuracy and relevance.</li></ol>';
    
}
